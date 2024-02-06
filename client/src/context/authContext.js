import axios from "axios";
import { createContext, useEffect, useState } from "react";

//createContext() is a function from React that creates a Context object
export const AuthContext = createContext();

// Represents the component to be wrapped with the context provider, in this case, the App component
export const AuthContexProvider = ({ children }) => {
  //If a user exists in local storage, we will use that information; otherwise, it indicates that
  //no user is logged in, and the value will be set to null
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );


  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  //update the local storage each times we change currentUSer
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
