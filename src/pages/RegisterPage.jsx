import React from 'react';
import { Helmet } from 'react-helmet-async';
import RegistrationForm from './../components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1>Registration</h1>
      <RegistrationForm />
    </>
  );
};

export default RegisterPage;
