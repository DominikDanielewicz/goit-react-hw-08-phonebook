import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginForm from './../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>Login</h1>
      <LoginForm />
    </HelmetProvider>
  );
};

export default LoginPage;
