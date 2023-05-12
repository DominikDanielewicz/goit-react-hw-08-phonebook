import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useAuth } from 'hooks';
import useMediaQuery from '@mui/material/useMediaQuery';

export const AuthNav = () => {
  const { isLoggedIn } = useAuth();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {matches ? (
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
      ) : (
        <>
          {!isLoggedIn && (
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
          )}
        </>
      )}
    </>
  );
};
