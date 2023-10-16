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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User Found");
      setUserData({ ...userData, firebaseData: user });
    } else {
      setUserData(getLogoutUserObject());
    }
  });

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
