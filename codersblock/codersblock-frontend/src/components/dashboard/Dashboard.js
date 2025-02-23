import React from "react";
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box,
  LinearProgress 
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* User Progress Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Your Progress
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Current Level: 1
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={60} 
                sx={{ mt: 1 }}
              />
            </Box>
            <Typography variant="body2" color="textSecondary">
              Completed Challenges: 0
            </Typography>
          </Paper>
        </Grid>

        {/* Recent Activity Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body1" color="textSecondary">
              No recent activity
            </Typography>
          </Paper>
        </Grid>

        {/* Recommended Challenges Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recommended Challenges
            </Typography>
            <Typography variant="body1" color="textSecondary">
              No challenges available yet
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 