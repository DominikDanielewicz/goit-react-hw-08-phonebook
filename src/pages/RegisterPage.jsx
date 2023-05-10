import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegistrationForm from './../components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1>Registration</h1>
      <RegistrationForm />
    </HelmetProvider>
  );
};

export default RegisterPage;
