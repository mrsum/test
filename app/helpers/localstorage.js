

export default (prefix = 'data_') => {

  // define function for key obtaining
  let _id = key => `${prefix}_${key}`

  return {

    get: key => ({ ...JSON.parse(localStorage.getItem(_id(key))) }),

    set: (key, value) => localStorage.setItem(_id(key), JSON.stringify(value)),

    remove: key => localStorage.removeItem(_id(key)),

    all: () => Object.keys(localStorage)
      .filter(key => key.includes(prefix))
      .map(key => {
        return {
          id: key, 
          ...JSON.parse(localStorage.getItem(_id(key)))
        }
      })  
  }
}
