import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  //Load employees from localStorage on first render
  useEffect(() => {
    const { employees } = getLocalStorage();
    setUserData(employees || []);
  }, []);

  //Save updated userData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(userData));
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
