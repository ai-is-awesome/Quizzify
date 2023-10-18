import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    firebaseData: {},
    serverUserData: {},
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User Found", user);
        setUserData({ ...userData, firebaseData: user });
      } else {
        console.log("NO user detected!");
        setUserData(getLogoutUserObject());
      }
    });
  }, [setUserData]);

  const authData = { isLoggedIn: false };
  const logout = () => {};

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

function getLogoutUserObject() {
  return {
    isLoggedIn: false,
    firebaseData: {},
    serverUserData: {},
  };
}
