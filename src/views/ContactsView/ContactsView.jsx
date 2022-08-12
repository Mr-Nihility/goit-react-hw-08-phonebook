import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';

import { NavLink, Outlet } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
// import PropTypes from 'prop-types';

//--------------------------------------------//
const ContactsView = () => {
  return (
    <div style={{ marginLeft: '300px' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        <li>
          <NavLink to="/goit-react-hw-08-phonebook/contacts/add">
            <AddCircleIcon sx={{ fontSize: 75, color: 'blue' }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/goit-react-hw-08-phonebook/contacts/search">
            <SearchIcon sx={{ fontSize: 75, color: 'blue' }} />
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <Container title="Contacts">
        <ContactList />
      </Container>
    </div>
  );
};

export { ContactsView };
