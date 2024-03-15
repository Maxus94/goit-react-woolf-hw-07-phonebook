import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/slice';

import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'store/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    console.log(items);
    return items.filter(contact => {
      console.log('filter', filter);
      console.log('toLower', contact.name.toLowerCase());
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filterContacts().map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
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
