import { useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handSubmit = e => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    dispatch(logIn(credentials));
  };

  const handInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <Box
        onSubmit={handSubmit}
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: 5,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            // alignItems: 'center',
          },
        }}
        noValidate
        autoComplete="on"
      >
        <Box
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '40px',
            marginTop: '100px',
          }}
        >
          Log In
        </Box>
        <Box
          sx={{
            '& .MuiTextField-root': {
              margin: '40px auto',
              width: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              // alignItems: 'center',
            },
          }}
        >
          <TextField
            onChange={handInput}
            name="email"
            value={email}
            required
            label="Email"
            placeholder="example@mail.com"
            type="email"
            id="inputEmail2"
          />

          <TextField
            onChange={handInput}
            name="password"
            value={password}
            required
            label="Password"
            placeholder="*********"
            type="password"
            id="inputPassword3"
          />

          <Button
            sx={{
              display: 'flex',
              margin: '0 auto',
              fontSize: '24px',
            }}
            variant="contained"
            size="large"
            type="submit"
          >
            Log in
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export { LoginView };
