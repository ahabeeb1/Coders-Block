import { Navigate } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

// Layout
import MainLayout from '../components/layout/MainLayout';

// Pages
import Home from '../components/pages/Home';
import Login from '../components/auth/login';
import Register from '../components/auth/Register';
import Dashboard from '../components/dashboard/Dashboard';
import Profile from '../components/profile/Profile';
import NotFound from '../components/pages/NotFound';

export const publicRoutes = [
  {
    path: ROUTES.HOME,
    element: <Home />
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />
  }
];

export const privateRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />
  },
  {
    path: ROUTES.PROFILE,
    element: <Profile />
  }
];

export const commonRoutes = [
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]; 