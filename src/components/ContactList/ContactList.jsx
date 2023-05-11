import React from 'react';
import ContactListElement from 'components/ContactListElement/ContactListElement';
import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/tasks/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactlist}>
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
    </ul>
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
