import React from 'react';
import { Helmet } from 'react-helmet-async';
import RegistrationForm from './../components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegistrationForm />
    </>
  );
};

export default RegisterPage;
