import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    firebaseData: {},
    serverUserData: {},
    loading: true,
    authError: null,
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

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth);
  };

  const isUserOnboarded = async () => {};

  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).catch((e) => {
      const obj = { errorCode: e.code, errorMessage: e.message };
      setUserData({ ...userData, authError: obj });
    });
  };

  const guestCheckout = async () => {
    const demoemail = "johndoe@gmail.com";
    const demopass = "johndoe";
    return signIn(demoemail, demopass);
  };

  return (
    <AuthContext.Provider
      value={{ ...userData, logout, signUp, signIn, guestCheckout }}
    >
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
