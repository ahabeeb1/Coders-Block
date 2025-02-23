import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OAuth2Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      // Store the token and user info
      localStorage.setItem("token", token);
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      // Handle error
      navigate("/login");
    }
  }, [navigate, location]);

  return null;
};

export default OAuth2Redirect;
