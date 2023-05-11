import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginForm from './../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
