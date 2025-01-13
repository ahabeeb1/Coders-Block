import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to CodersBlock{" "}
        </Typography>{" "}
        <Typography variant="body1">
          A platform for developers to share and learn together.{" "}
        </Typography>{" "}
      </Box>{" "}
    </Container>
  );
};

export default Home;
