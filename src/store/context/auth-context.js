import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: {},
  login: ({ token, user_id }) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState({
    token: "",
    user_id: "",
  });

  function login({ token, user_id }) {
    return setDataUser({ token, user_id });
  }

  function logout() {
    return setDataUser({ token: "", user_id: "" });
  }

  const value = {
    user: dataUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
