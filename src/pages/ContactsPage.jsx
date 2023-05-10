import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/tasks/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/tasks/operations';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ClipLoader from 'react-spinners/ClipLoader';
import ContactForm from 'components/ContactForm/ContactForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <ClipLoader />}
        <ContactList />
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
