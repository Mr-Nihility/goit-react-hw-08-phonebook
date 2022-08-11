import React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth-operations';

//----------------------------------------------------//

function RegistrationView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerSumbit = evt => {
    evt.preventDefault();
    const credentials = {
      name,
      email,
      password,
    };
    console.log(credentials);
    dispatch(signIn(credentials));
  };

  const handlerChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };
  return (
    <Box
      onSubmit={handlerSumbit}
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 5,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
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
        Sign In form
      </Box>
      <Box
        sx={{
          '& .MuiTextField-root': {
            margin: '40px auto',
            width: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
      >
        <TextField
          required
          label="Name"
          value={name}
          name="name"
          onChange={handlerChange}
          placeholder="Wasya Rogovenko"
          type="text"
          id="inputName3"
        />
        <TextField
          required
          label="Email"
          value={email}
          name="email"
          onChange={handlerChange}
          placeholder="example@mail.com"
          type="email"
          id="inputEmail3"
        />

        <TextField
          required
          label="Password"
          value={password}
          name="password"
          onChange={handlerChange}
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
          Sign in
        </Button>
      </Box>
    </Box>
  );
}

export { RegistrationView };
