import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from 'redux/contacts/contscts-operations';
import { itemsSelector } from 'redux/contacts/contacts-selectors';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

//--------------------------------------------------------------//

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    if (!name || !number) {
      toast.warn('Please, fill all fields');
      return;
    }
    const inContacts = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (inContacts) {
      toast.warn(`${name} is already in contacts`);
      return;
    }

    dispatch(addUser({ name, number, id }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handlerChange}
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className="input"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handlerChange}
          required
        />
      </label>
      <Button
        sx={{ fontSize: '24px' }}
        size="large"
        variant="contained"
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};

export { Form };
