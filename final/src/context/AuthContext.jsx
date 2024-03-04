import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { admin: action.payload };
    case "LOGOUT":
      return { admin: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    admin: JSON.parse(localStorage.getItem("admin")),
  });

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      dispatch({ type: "LOGIN", payload: admin });
    }
  }, []);

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${state?.admin?.accessToken}`;

  console.log("AuthContext state: ", state?.admin?.accessToken);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
