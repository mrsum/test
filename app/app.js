// Depends
import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { HashRouter as Router, hashHistory} from 'react-router-dom'
import { Provider } from 'react-redux'


// Global stylesheets
import '_app/assets/stylesheets/app.styl'

// Routes
import createRoutes from './routes'

// Store
import store from '_app/helpers/store'

// constants and variables
const MOUNT_NODE = document.getElementById('app')

// Prepare routes
const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      { createRoutes() }
    </Router>
  </Provider>
)

// Render applciation
render(routes, MOUNT_NODE)
