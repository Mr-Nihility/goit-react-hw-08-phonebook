import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { Container } from './Container/Container';

//--------------------------------------------------------------------//

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Container title="Phonebook">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};

export { App };
