import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
// import PropTypes from 'prop-types';

//--------------------------------------------//
const ContactsView = () => {
  return (
    <>
      <Container title="Phonebook">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export { ContactsView };
