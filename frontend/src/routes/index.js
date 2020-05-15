import React  from 'react';
import {useAuth} from '../context/auth'
import AuthRoute from './authroute'
import PrivateRoute from './privateroute'

const Route = () => {
  const {signed} = useAuth()
  console.log(signed)
  return ( signed ?  <AuthRoute/> : <PrivateRoute/>
  );
};

export default Route;