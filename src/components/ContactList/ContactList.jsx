import { ContactItem } from './ContactItem/ContactItem';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from 'redux/contacts/contscts-operations';
import {
  filterSelector,
  itemsSelector,
} from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
//----------------------------------------------------------------//

const ContactList = () => {
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const contacts = items?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(deleteUser(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export { ContactList };
