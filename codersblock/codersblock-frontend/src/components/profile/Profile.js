import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Profile{" "}
          </Typography>{" "}
          <Typography variant="body1">Username: {user.username} </Typography>{" "}
          <Typography variant="body1">Email: {user.email} </Typography>{" "}
        </Paper>{" "}
      </Box>{" "}
    </Container>
  );
};

export default Profile;
