import { createContext, useState } from "react";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    return { token, user };
  });
    const login = (userData) => {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("user", JSON.stringify(userData.user));
        setAuth({ token: userData.token, user: userData.user });
    };
    const logout = () => {
      localStorage.clear();
      setAuth({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {{children}}
        </AuthContext.Provider>
    )
};

export default Authprovider;
