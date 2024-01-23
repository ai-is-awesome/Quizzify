import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../packages/api/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  FirebaseUserType,
  UserObjectType,
  useAuthDataType,
} from "./shared/types";
import { getUserData } from "../packages/api/services";

export const AuthContext = createContext<useAuthDataType | undefined>(
  undefined
);

export default function AuthProvider({ children }) {
  const initialState: UserObjectType = {
    serverUserData: { loadingStatus: "loading" },
    firebaseAuthState: { status: "loading", isLoggedIn: false },
  };
  const [userData, setUserData] = useState<UserObjectType>(initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (user: FirebaseUserType) => {
      if (user) {
        setUserData({
          ...userData,
          firebaseAuthState: {
            firebaseUserData: user,
            status: "success",
            isLoggedIn: true,
          },
        });
      } else {
        setUserData({
          ...initialState,
          firebaseAuthState: { status: "success", isLoggedIn: false },
        });
      }
    });
  }, [setUserData]);

  useEffect(() => {
    console.log("User data is : ", userData);

    // If the user is logged out, then set the serverUserData to null and loading status to succcess with authStatus as logged-out
    if (
      userData.serverUserData.loadingStatus !== "success" &&
      userData.firebaseAuthState.isLoggedIn === false
    ) {
      setUserData({
        ...userData,
        serverUserData: {
          data: null,
          loadingStatus: "success",
          authStatus: "logged-out",
        },
      });
    }
    // If the user is loggedin but the serverUserData is not loaded, then load the serverUserData
    if (
      userData.firebaseAuthState.status === "success" &&
      userData.serverUserData.loadingStatus !== "success"
    ) {
      const accessToken =
        userData.firebaseAuthState.firebaseUserData?.accessToken;
      getUserData(accessToken).then((resp) => {
        console.log("setting server data : ", resp);
        setUserData({
          ...userData,
          serverUserData: {
            data: resp,
            isOnboarded: resp.isOnboarded,
            loadingStatus: "success",
          },
        });
      });
    }
  }, [userData]);

  const isUserOnBoarded: () => boolean = () => {
    return true;
  };

  const signIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const getAuthToken = () => {
    return userData.firebaseAuthState.firebaseUserData?.accessToken;
  };

  const logout = async () => {
    return signOut(auth);
  };

  const isUserOnboarded = () => {
    return (
      userData.serverUserData.loadingStatus === "success" &&
      userData.serverUserData.isOnboarded === true
    );
  };

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
      value={{
        ...userData,
        logout,
        signUp,
        signIn,
        guestCheckout,
        isUserOnboarded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function getLogoutUserObject() {
  return {
    isLoggedIn: false,
    firebaseData: {},
    serverUserData: { loadingStatus: "notLoaded" },
    authError: null,
    isOnboarded: false,
  };
}
