import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook App</title>
      </Helmet>
      <div>Home</div>
    </HelmetProvider>
  );
};

export default HomePage;
