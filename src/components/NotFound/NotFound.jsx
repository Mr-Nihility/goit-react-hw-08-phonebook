import React from 'react';
import { GoHome } from './NotFound.styled';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box } from '@mui/material';

//--------------------------------------------------//

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '45px',
        marginTop: '100px',
        margin: '0 auto',
      }}
    >
      <GoHome to="/goit-react-hw-08-phonebook/">
        <HomeRoundedIcon sx={{ fontSize: 40, color: 'blue' }} />
      </GoHome>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/phone-book-1404933-1187580.png"
        alt="greeting"
        width={400}
      />
    </Box>
  );
}
