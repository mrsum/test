
// Depends
import { modelReducer, formReducer, modeled } from 'react-redux-form'

// in case of new
const initialState = {
  title: '',
  description: '',
  cover: '',
  year: '',
  genre: '',
  director: '',
  duration: ''
}

// custom movies reducer
const movies = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_ALL_FULFILLED':
      return action.payload

    default:
      return []
  }
}

// export movie reducer and movie form
export default {
  movies,
  movie: modelReducer('movie', initialState),
  movieForm: formReducer('movie', initialState),
}
