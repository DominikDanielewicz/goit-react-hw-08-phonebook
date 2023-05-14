import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useAuth } from 'hooks';

export const ResponsiveNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <MenuItem component={Link} to="/">
        <Typography textAlign="center">Home</Typography>
      </MenuItem>
      {isLoggedIn ? (
        <MenuItem component={Link} to="/contacts">
          <Typography textAlign="center">Contacts</Typography>
        </MenuItem>
      ) : (
        <>
          <MenuItem component={Link} to="/register">
            <Typography textAlign="center">Register</Typography>
          </MenuItem>
          <MenuItem component={Link} to="/login">
            <Typography textAlign="center">Log in</Typography>
          </MenuItem>
        </>
      )}
    </>
  );
};
