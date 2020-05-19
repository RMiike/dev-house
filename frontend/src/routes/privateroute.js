import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/common/header'

import Dashboard from '../screens/dashboard'
import AddHouse from '../screens/addhouse'
import EditHouse from '../screens/addhouse/edit'

const PrivateRoute = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/house' component={AddHouse} />
        <Route exact path='/house/:id' component={EditHouse} />
      </Switch>
    </>
  )
}

export default PrivateRoute