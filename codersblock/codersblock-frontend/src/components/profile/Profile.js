import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import ChangePassword from "../auth/ChangePassword";

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      <Grid container spacing={3}>
        {/* User Info Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>Username:</strong> {user?.username}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {user?.email}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Change Password Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <ChangePassword />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
