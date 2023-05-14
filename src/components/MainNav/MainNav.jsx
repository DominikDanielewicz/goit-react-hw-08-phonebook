import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const MainNav = () => {
  return (
    <>
      <Button
        component={Link}
        to="/register"
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Register
      </Button>
      <Button
        component={Link}
        to="/login"
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Log in
      </Button>
    </>
  );
};
