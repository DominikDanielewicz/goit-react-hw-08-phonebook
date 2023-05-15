import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/tasks/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/tasks/operations';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { Helmet } from 'react-helmet-async';
import Loader from './../components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <main>
        <ContactForm />
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </main>
    </>
  );
};

export default ContactsPage;
