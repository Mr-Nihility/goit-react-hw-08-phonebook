import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function HomeView() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '50px',
        padding: '150px',
      }}
    >
      <Typography variant="h2" component="div">
        Welcome to PhoneBook!
      </Typography>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/phone-book-1404933-1187580.png"
        alt="greeting"
        width={400}
      />
    </Box>
  );
}

export default HomeView;
