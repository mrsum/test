// Depends
import { uid } from '_app/helpers/uid'

/**
 * local storage adapter
 * @param  {String} prefix [description]
 * @return {[type]}        [description]
 */
export default (prefix = 'data_') => {

  // define function for key obtaining
  let _id = key => `${prefix}_${key}`

  // helper for localstorage with json parse
  let _getDataByKey = key => {
    return JSON.parse(localStorage.getItem(key.toString()))
  }

  return {

    read: key => new Promise((resolve, reject) => {
      try {
        resolve(_getDataByKey(key))
      } catch (Err) {
        reject(Err)
      }
    }),

    create: (value) => new Promise((resolve, reject) => {
      try {
        const id = uid()
        localStorage.setItem(_id(id), JSON.stringify(value))
        resolve(value)
      } catch (Err) {
        reject(Err)
      }
    }),


    update: (id, value) => new Promise((resolve, reject) => {
      try {
        localStorage.setItem(id, JSON.stringify(value))
        resolve(value)
      } catch (Err) {
        reject(Err)
      }
    }),

    remove: key => new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key)
        resolve()
      } catch(Err) {
        reject(Err)
      }

    }),

    getAll: () => new Promise((resolve, reject) => {
      try {
        let data = Object.keys(localStorage)
          .filter(key => key.includes(prefix))
          .map(key => ({ id: key,  ..._getDataByKey(key) }))

        resolve(data && data.length > 0 ? data : [])

      } catch (Err) {
        reject(Err)
      }
    })
  }
  


  // return {

  //   get: key => ({ ...JSON.parse(localStorage.getItem(_id(key))) }),

  //   set: (key, value) => localStorage.setItem(_id(key), JSON.stringify(value)),

  //   remove: key => localStorage.removeItem(_id(key)),

  //   all: () => Object.keys(localStorage)
  //     .filter(key => key.includes(prefix))
  //     .map(key => {
  //       return {
  //         id: key, 
  //         ...JSON.parse(localStorage.getItem(_id(key)))
  //       }
  //     })  
  // }
}
