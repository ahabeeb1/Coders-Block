import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box 
        sx={{ 
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3
        }}
      >
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Welcome to CodersBlock
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Enhance your coding skills with interactive challenges and AI-powered assistance
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => navigate(ROUTES.REGISTER)}
          >
            Get Started
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 