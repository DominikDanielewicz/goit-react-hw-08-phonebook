import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';
import { AppBar } from './AppBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
