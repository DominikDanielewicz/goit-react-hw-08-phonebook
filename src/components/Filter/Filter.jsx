import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/tasks/filterSlice';
import { selectContactsFilter } from 'redux/tasks/selectors';

import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const filterChangeHandler = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h5">
            Contacts
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            id="filter"
            value={filter}
            type="text"
            label="Contact filter"
            name="filter"
            autoFocus
            required
            onChange={filterChangeHandler}
          />
        </Box>
      </Container>
    </>
  );
};

export default Filter;
