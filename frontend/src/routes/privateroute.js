import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Dashboard from '../screens/dashboard'

const PrivateRoute = () => {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  );
};

export default PrivateRoute;