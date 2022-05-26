import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.config';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../SharedPages/Spinner';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAdmin = ({children}) => {
  const [user, loading] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Spinner></Spinner>
  }

  if(!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{from: location}}></Navigate>
  }

  return children;
  
};

export default RequireAdmin;