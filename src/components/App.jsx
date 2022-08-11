import { Route, Routes } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView/ContactsView';
import { LoginView } from 'views/LoginView/LoginView';
import { RegistrationView } from 'views/RegistrationView/RegistrationView';
import { LayOut } from './Layout/Layout';

//--------------------------------------------------------------------//

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook/" element={<LayOut />}>
          <Route path="register" element={<RegistrationView />}></Route>
          <Route path="login" element={<LoginView />}></Route>
          <Route path="contacts" element={<ContactsView />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export { App };

/**
 * 
Додай маршрутизацію та кілька сторінок:
/register - публічний маршрут реєстрації нового користувача з формою
/login - публічний маршрут логіна існуючого користувача з формою
/contacts - приватний маршрут для роботи з колекцією контактів користувача
 */
