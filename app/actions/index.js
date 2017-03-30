
/**
 * create new one
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const create = movie => ({
  type: 'ADD_MOVIE', ...movie
})

/**
 * get by id
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const read = movie => ({
  type: 'GET_MOVIE', ...movie
})

/**
 * remove by id
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const remove = movie => ({
  type: 'REMOVE_MOVIE', ...movie
})

/**
 * update by id
 * @param  {[type]} movie [description]
 * @return {[type]}       [description]
 */
export const update = movie => ({
  type: 'UPDATE_MOVIE', ...movie
})

/**
 * get list of movies
 * @return {[type]} [description]
 */
export const getAll = () => ({
  type: 'GET_ALL'
})
