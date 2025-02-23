import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container component="main" className="main-content">
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout; 