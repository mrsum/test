
// Depends
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { modelReducer, formReducer } from 'react-redux-form'
import thunk from 'redux-thunk'

// load models inttial states
import initialMovieState from '_app/models/movie'

// prepare store
const store = applyMiddleware(thunk)
  (createStore)(
    combineReducers({
      movie: modelReducer('movie', initialMovieState),
      movieForm: formReducer('movie', initialMovieState)
    })
  )

export default store
