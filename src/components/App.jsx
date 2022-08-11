import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getRefresh } from 'redux/auth/auth-operations';
import { ContactsView } from 'views/ContactsView/ContactsView';
import { LoginView } from 'views/LoginView/LoginView';
import { RegistrationView } from 'views/RegistrationView/RegistrationView';
import { LayOut } from './Layout/Layout';
import { getToken } from 'redux/auth/auth-selectors';
//--------------------------------------------------------------------//
//{name: 'Vova Roman', email: 'test@asd.com', password: 'test12345912'}
const App = () => {
  const dispatch = useDispatch();
  const accountToken = useSelector(getToken);
  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch, accountToken]);

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
