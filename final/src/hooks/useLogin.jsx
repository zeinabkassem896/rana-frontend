import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate=useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(import.meta.env.VITE_API_ENDPOINT+"api/auth/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error||json.message);
    }
    if (response.ok) {
      localStorage.setItem("admin", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      setError('Authentication Successful')
      navigate("/admin/admins")

    }
  };
  return {login, setIsLoading, error}
};