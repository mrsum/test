
// Depends
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

// get reducers object
import reducers from '_app/reducers'

// export store
export default createStore(
  combineReducers({
    // put all system reducers
    ...reducers,
    // add routting matcher
    routing: routerReducer
  }), 

  // initial state here if needed
  {},

  // compose middlewares
  compose(
    applyMiddleware(
      routerMiddleware(),
      thunk,
      promiseMiddleware(),
      // logger
    )
  )
)
