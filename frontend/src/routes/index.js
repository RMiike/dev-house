import React  from 'react';
import {useAuth} from '../context/auth'
import AuthRoute from './authroute'
import PrivateRoute from './privateroute'

const Route = () => {
  const {signed} = useAuth()
  return ( signed ?  <AuthRoute/> : <PrivateRoute/>
  );
};

export default Route;