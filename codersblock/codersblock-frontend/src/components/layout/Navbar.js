import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          CodersBlock{" "}
        </Typography>{" "}
        <Box>
          {" "}
          {user ? (
            <>
              <Button color="inherit" component={RouterLink} to="/profile">
                Profile{" "}
              </Button>{" "}
              <Button color="inherit" onClick={logout}>
                Logout{" "}
              </Button>{" "}
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/login">
                Login{" "}
              </Button>{" "}
              <Button color="inherit" component={RouterLink} to="/register">
                Register{" "}
              </Button>{" "}
            </>
          )}{" "}
        </Box>{" "}
      </Toolbar>{" "}
    </AppBar>
  );
};

export default Navbar;

