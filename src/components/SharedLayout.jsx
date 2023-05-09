import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';
import Navigation from './Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
