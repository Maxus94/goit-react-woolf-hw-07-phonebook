import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './App.module.css';
import { getError, getIsLoading } from 'store/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <p>Error! {error}</p>}
      {isLoading && <p>Loading...</p>}
      <ContactList />
    </div>
  );
};
