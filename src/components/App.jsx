import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getRefresh } from 'redux/auth/auth-operations';
import { ContactsView } from 'views/ContactsView/ContactsView';
import { LoginView } from 'views/LoginView/LoginView';
import { RegistrationView } from 'views/RegistrationView/RegistrationView';
import { LayOut } from './Layout/Layout';
import { getStatusFetch, getToken } from 'redux/auth/auth-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Box } from '@mui/material';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import HomeView from 'views/HomeView/HomeView';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { Container } from './Container/Container';
import NotFound from './NotFound/NotFound';
import { ThreeDots } from 'react-loader-spinner';
//--------------------------------------------------------------------//
//{name: 'Vova Roman', email: 'test@asd.com', password: 'test12345912'}

const App = () => {
  const dispatch = useDispatch();
  const accountToken = useSelector(getToken);
  const isFetching = useSelector(getStatusFetch);

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch, accountToken]);

  return (
    <>
      {isFetching ? (
        <ThreeDots
          height="200"
          width="400"
          radius="20"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            margin: '500px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '45px',
            marginTop: '100px',
            margin: '0 auto',
          }}
        >
          <Routes>
            <Route path="/goit-react-hw-08-phonebook/" element={<LayOut />}>
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={
                  <PublicRoute>
                    <RegistrationView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              >
                <Route
                  path="add"
                  element={
                    <Container title="Add contact">
                      <Form />
                    </Container>
                  }
                ></Route>
                <Route path="search" element={<Filter />}></Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <ToastContainer autoClose={2000} theme="colored" />
        </Box>
      )}
    </>
  );
};

export { App };

/**
 * 
?????????? ?????????????????????????? ???? ???????????? ????????????????:
/register - ?????????????????? ?????????????? ???????????????????? ???????????? ?????????????????????? ?? ????????????
/login - ?????????????????? ?????????????? ???????????? ?????????????????? ?????????????????????? ?? ????????????
/contacts - ?????????????????? ?????????????? ?????? ???????????? ?? ?????????????????? ?????????????????? ??????????????????????
 */
