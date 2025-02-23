import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MainLayout from '../components/layout/MainLayout';
import { publicRoutes, privateRoutes, commonRoutes } from './index';
import LoadingScreen from '../components/common/LoadingScreen';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

        {/* Protected Routes */}
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              user ? route.element : <Navigate to="/login" state={{ from: route.path }} />
            }
          />
        ))}

        {/* Common Routes (404, etc) */}
        {commonRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes; 