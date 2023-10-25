import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    firebaseData: {},
    serverUserData: {},
    loading: true,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User Found", user);
        setUserData({
          ...userData,
          firebaseData: user,
          isLoggedIn: true,
          loading: false,
        });
      } else {
        console.log("NO user detected!");
        setUserData({ ...getLogoutUserObject(), loading: false });
      }
    });
  }, [setUserData]);

  const logout = () => {};

  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((e) => {
        const errorCode = error.code;
        const errorMessage = erorr.message;
      });
  };

  return (
    <AuthContext.Provider value={{ ...userData, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

function getLogoutUserObject() {
  return {
    isLoggedIn: false,
    firebaseData: {},
    serverUserData: {},
  };
}
