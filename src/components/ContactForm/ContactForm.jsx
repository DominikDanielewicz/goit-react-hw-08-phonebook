import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/tasks/operations';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const dispatch = useDispatch();

  const validateName = name => {
    const pattern =
      /^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(([' -][a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]*)*$/;
    return pattern.test(name);
  };

  const validateNumber = number => {
    const apattern =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    return apattern.test(number);
  };

  const onNameChange = e => {
    setName(e.target.value);
    setNameError(!validateName(e.target.value));
  };

  const onPhoneChange = e => {
    setNumber(e.target.value);
    setNumberError(!validateNumber(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (validateName(name) && validateNumber(number)) {
      dispatch(
        addContact({
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
    }

    form.reset();
    setName('');
    setNumber('');
    setNameError(false);
    setNumberError(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Add your contact
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Contact Name"
            name="name"
            autoFocus
            value={name}
            onChange={onNameChange}
            error={nameError}
            helperText={
              nameError &&
              'Name may contain only letters, apostrophe, dash and spaces'
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Phone number"
            type="tel"
            id="phone"
            value={number}
            onChange={onPhoneChange}
            error={numberError}
            helperText={
              numberError &&
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={nameError || numberError}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
