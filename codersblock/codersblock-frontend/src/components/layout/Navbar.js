import React from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Container 
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../utils/constants";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate(user ? ROUTES.DASHBOARD : ROUTES.LOGIN);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="#"
            onClick={handleLogoClick}
            sx={{ 
              flexGrow: 1, 
              textDecoration: "none", 
              color: "inherit",
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            CodersBlock
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {user ? (
              <>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to={ROUTES.DASHBOARD}
                >
                  Dashboard
                </Button>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to={ROUTES.PROFILE}
                >
                  Profile
                </Button>
                <Button 
                  color="inherit" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to={ROUTES.LOGIN}
                >
                  Login
                </Button>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to={ROUTES.REGISTER}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

