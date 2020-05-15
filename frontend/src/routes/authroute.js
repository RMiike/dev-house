import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../screens/home'
import SignIn from '../screens/signin'
import SignUp from '../screens/signup'

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Switch>
  )
}

export default AuthRoutes