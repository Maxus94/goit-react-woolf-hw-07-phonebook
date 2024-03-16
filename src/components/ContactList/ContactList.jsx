import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'store/selectors';
import { deleteContactsThunk, getContactsThunk } from 'store/thunks';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleDelete = id => {
    dispatch(deleteContactsThunk(id));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {filterContacts().map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={css.itemButton}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
