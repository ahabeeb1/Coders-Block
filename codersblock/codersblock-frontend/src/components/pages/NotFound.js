import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: 2
      }}
    >
      <Typography variant="h1" component="h1">
        404
      </Typography>
      <Typography variant="h5" component="h2">
        Page Not Found
      </Typography>
      <Typography color="textSecondary" align="center">
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(ROUTES.HOME)}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound; 