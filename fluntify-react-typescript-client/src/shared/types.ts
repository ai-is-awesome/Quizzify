import { User as FirebaseUser } from "firebase/auth";

type UserServerSuccessType = {
  isOnboarded?: boolean;
  loadingStatus: "success";
  authStatus: "logged-in" | "guest" | "logged-out";
  [other: string]: any;
};

type UserServerFailureType = {
  errorMessage: string;
  loadingStatus: "failed";
};

type UserServerLoadingType = {
  loadingStatus: "loading";
};

export type FirebaseUserType = FirebaseUser & { accessToken: string };

export type UserObjectType = {
  firebaseAuthState: {
    status: "loading" | "success" | "failure";
    firebaseUserData?: FirebaseUserType;
    isLoggedIn: boolean;
  };
  serverUserData:
    | UserServerFailureType
    | UserServerSuccessType
    | UserServerLoadingType;
};

export type useAuthDataType = UserObjectType & {
  logout: () => void;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  guestCheckout: (email: string, password: string) => void;
  isUserOnboarded: () => boolean;
};

export type onboardUserPayload = {
  name: string;
  token: string;
};
