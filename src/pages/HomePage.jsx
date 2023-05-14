import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from 'hooks';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              This is a simple phone book application. Register or Log in if you
              have your account already, and start creating your private
              collection of contacts.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {!isLoggedIn && (
                <>
                  <Button component={Link} to="/register" variant="contained">
                    Register
                  </Button>
                  <Button component={Link} to="/login" variant="outlined">
                    Log in
                  </Button>
                </>
              )}
            </Stack>
          </Container>
        </Box>
      </main>
    </>
  );
};

export default HomePage;
