
// Depends
import store from '_app/helpers/localstorage'

// prepare storage instance worker
const storage = store('movie_')

/**
 * create new one
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const create = movie => ({
  type: 'ADD_MOVIE',
  payload: storage.create(movie)
})

/**
 * get by id
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const read = key => ({
  type: 'GET_MOVIE',
  payload: storage.read(key)
})

/**
 * remove by id
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const remove = id => ({
  type: 'REMOVE_MOVIE', 
  payload: storage.remove(id)
})

/**
 * update by id
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const update = (id, movie) => ({
  type: 'UPDATE_MOVIE',
  payload: storage.update(id, movie)
})

/**
 * get list of movies
 * @return {[type]} [description]
 */
export const getAll = () => ({
  type: 'GET_ALL',
  payload: storage.getAll()
})
