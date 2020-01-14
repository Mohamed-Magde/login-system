import React from 'react'

import { Route, Switch } from 'react-router-dom'

// Pages
import DashboardPage from '../pages/Dashboard'
import LogIn from '../pages/LogIn'

export default () => (
  <Switch>
    <Route exact path="/" component={DashboardPage} />
    <Route path="/login" component={LogIn} />
  </Switch>
)
