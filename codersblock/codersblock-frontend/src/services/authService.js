import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(API_URL + "login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || "Login failed");
      }
      throw new Error("Network error occurred");
    }
  },

  register: async (username, email, password) => {
    try {
      const response = await axios.post(API_URL + "signup", {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || "Registration failed");
      }
      throw new Error("Network error occurred");
    }
  },

  changePassword: async (username, currentPassword, newPassword) => {
    try {
      const response = await axios.post(API_URL + "change-password", {
        username,
        currentPassword,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to change password');
    }
  },
};

export default authService;
