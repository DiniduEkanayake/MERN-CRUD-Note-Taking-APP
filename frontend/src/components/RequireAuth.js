import { useEffect } from "react";
import { Navigate } from "react-router-dom"; // Ensure this is imported
import authStore from "../stores/authStore";

export default function RequireAuth({ children }) {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, [store]); // Include `store` in the dependency array

  if (store.loggedIn === null) {
    return <div>Loading...</div>; // Display a loading indicator while checking auth
  }

  if (store.loggedIn === false) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return <>{children}</>; // Render the children when authenticated
}

