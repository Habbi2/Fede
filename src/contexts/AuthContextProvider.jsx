import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuthenticated: false,
  });

  const toggleAuth = (user) => {
    setState({
      user: user,
      isAuthenticated: !state.isAuthenticated,
    });
  };
  return (
    <AuthContext.Provider value={{ ...state, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
