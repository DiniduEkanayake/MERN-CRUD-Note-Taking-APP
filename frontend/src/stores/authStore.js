import create from "zustand";
import axios from "axios";

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
    const { loginForm } = authStore.getState();

    const res = await axios.post("/login", loginForm);
    set({ 
        loggedIn: true,
        loginForm: {
          email: "",
          password: "",
        },
  
    });
  },

  checkAuth: async () => {
    try {
      const res = await axios.get("/check_auth");
      console.log("Auth check successful:", res);
      set({ loggedIn: true });
    } catch (error) {
      console.error("Auth check failed:", error);
      set({ loggedIn: false });
    }
  },

  signup: async () => {
    const { signupForm } = authStore.getState();

    const res = await axios.post("/signup", signupForm);
    set({
        signupForm: {
          email: "",
          password: "",
        },
      });
  },

  logout: async () => {
    await axios.get("/logout");
    set({ loggedIn: false });
  },
}));

export default authStore;
