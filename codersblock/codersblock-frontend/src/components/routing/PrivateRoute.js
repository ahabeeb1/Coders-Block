import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../utils/constants';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // or a loading spinner
  }

  return user ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
