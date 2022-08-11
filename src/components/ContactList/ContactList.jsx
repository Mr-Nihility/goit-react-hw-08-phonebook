import { ContactItem } from './ContactItem/ContactItem';
import {
  Table,
  Typography,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@mui/material';
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
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: 'black' }}>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              №
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Avatar
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Phone
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Options
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map(({ id, name, number }, index) => {
          return (
            <ContactItem
              index={index}
              key={id}
              id={id}
              name={name}
              phone={number}
              onDelete={deleteContact}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export { ContactList };
