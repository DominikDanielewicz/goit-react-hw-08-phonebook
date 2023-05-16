import React from 'react';
import ContactListElement from 'components/ContactListElement/ContactListElement';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/tasks/selectors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { Container } from '@mui/material';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <Container sx={{ mt: 2, flexGrow: 1 }} maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {filteredContacts.length ? (
              filteredContacts.map(contact => (
                <ContactListElement
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                />
              ))
            ) : (
              <p>Your phonebook is empty. Add your contacts</p>
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

ContactList.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      deleteContact: propTypes.func,
    })
  ),
};

export default ContactList;
