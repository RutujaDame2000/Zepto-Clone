import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token) return <Navigate to="/auth" replace />;
  if (role && user?.role !== role) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
