import create from "zustand";
import axios from "axios";

// Base URL for backend API
const API_BASE_URL = "http://192.168.80.128/api";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    password: "",
  },
  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      loginForm: {
        ...state.loginForm,
        [name]: value,
      },
    }));
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      signupForm: {
        ...state.signupForm,
        [name]: value,
      },
    }));
  },

  login: async () => {
    try {
      const { loginForm } = authStore.getState();
      const res = await axios.post(`${API_BASE_URL}/login`, loginForm, {
        withCredentials: true,
      });

      set({
        loggedIn: true,
        loginForm: {
          email: "",
          password: "",
        },
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  checkAuth: async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/check-auth`, {
        withCredentials: true,
      });
      console.log("Auth check successful:", res);
      set({ loggedIn: true });
    } catch (error) {
      console.error("Auth check failed:", error);
      set({ loggedIn: false });
    }
  },

  signup: async () => {
    try {
      const { signupForm } = authStore.getState();
      const res = await axios.post(`${API_BASE_URL}/signup`, signupForm, {
        withCredentials: true,
      });

      set({
        signupForm: {
          email: "",
          password: "",
        },
      });
    } catch (error) {
      console.error("Signup failed:", error);
    }
  },

  logout: async () => {
    try {
      await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
      set({ loggedIn: false });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));
