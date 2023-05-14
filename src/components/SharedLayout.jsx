import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
