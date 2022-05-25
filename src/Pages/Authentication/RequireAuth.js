import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.config';
import Spinner from '../SharedPages/Spinner';

const RequireAuth = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>
  }

  if(!user) {
    return <Navigate to="/login" state={{from: location}}></Navigate>
  }

  return children;
  
};

export default RequireAuth;