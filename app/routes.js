// Depends
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import IndexPage from '_app/containers/Pages/Index'
import FormPage from '_app/containers/Pages/Form'

/**
 * Create routes
 * @param  {[type]} history [description]
 * @return {[type]}         [description]
 */
export default () => {
  return (
    <Switch>
      <Route exact path='/' component={ IndexPage } />
      <Route path='/movie/new' component={ FormPage } />
      <Route path='/movie/:id' component={ FormPage } />
    </Switch>
  )
}
