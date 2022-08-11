import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogin, getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import Avatar from 'react-avatar';
//------------------------------------------------------//

function LayOut() {
  const isLogin = useSelector(getIsLogin);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* <NavLink to={'/'}>Home</NavLink> */}
              <NavLink to={'/goit-react-hw-08-phonebook/contacts'}>
                Contacts
              </NavLink>
            </Typography>
            {isLogin && (
              <>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="p"
                  sx={{ m: 2 }}
                >
                  Hello, {name} .Glad to see you!!!
                </Typography>
                <Avatar name={name} size={45} round={true}></Avatar>
                <Button color="inherit" onClick={handlerLogout}>
                  LogOut
                </Button>
              </>
            )}
            {!isLogin && (
              <>
                <NavLink to={'/goit-react-hw-08-phonebook/login'}>
                  LogIn
                </NavLink>
                <NavLink to={'/goit-react-hw-08-phonebook/register'}>
                  Sing In
                </NavLink>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </>
  );
}

export { LayOut };
