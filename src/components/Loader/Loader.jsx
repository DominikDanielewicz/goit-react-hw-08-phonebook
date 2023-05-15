import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
