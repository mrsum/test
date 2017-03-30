
// Depends
import store from '_app/helpers/localstorage'

// prepare storage instance worker
const storage = store('movies_')

/**
 * Movie reducer
 * @param  {Object} state  [description]
 * @param  {Object} action [description]
 * @return {[type]}        [description]
 */
const movie = (state = {}, action = {}) => {

  switch (action.type) {

    // add new one
    case 'ADD_MOVIE': return {
      movie: storage.set(action)
    }

    // get
    case 'GET_MOVIE': return {
      movie: storage.get(action)
    }

    // remove
    case 'REMOVE_MOVIE': return {
      movie: storage.remove(action)
    }

    // update
    case 'UPDATE_MOVIE': return {
      movie: storage.set(action)
    }

    // get list of movies
    case 'GET_ALL': return { 
      movies: storage.all() 
    }

    // default behaviour
    default:
      return { movies: [] }
  }
}

export default movie
