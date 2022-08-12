import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
// import PropTypes from 'prop-types';

//--------------------------------------------//
const ContactsView = () => {
  return (
    <div>
      <Container title="Phonebook">
        <Form />
      </Container>
      <Filter />
      <Container title="Contacts">
        <ContactList />
      </Container>
    </div>
  );
};

export { ContactsView };
