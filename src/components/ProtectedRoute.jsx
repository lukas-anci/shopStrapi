import React from 'react';
import { Route } from 'react-router-dom';
import useAuthCtx from './../hooks/useAuthCtx';
import LoginPage from './../pages/LoginPage';

export default function ProtectedRoute({ path, children }) {
  const { isLoggedIn } = useAuthCtx();

  return (
    <Route path={path}>
      {isLoggedIn && children}

      {!isLoggedIn && <LoginPage />}
    </Route>
  );
}
