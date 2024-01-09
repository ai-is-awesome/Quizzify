import { User as FirebaseUser } from "firebase/auth";

type UserServerSuccessType = {
  isOnboarded?: boolean;
  loadingStatus: "success";
  authStatus: "logged-in" | "guest" | "logged-out";
  data: { firebaseUID: string; isOnboarded: boolean; name: string };
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

export type QuizType = {
  _id: string;
  name: string;
  questions: string[] | QuestionType[];
  numberOfQuestions: number;
  upvotes: number;
  downvotes: number;
  created_by: string;
  isTimed: boolean;
  created_at: Date;
  category: { name: string; _id: string };
  description: string;
};

export type choiceType = {
  choiceText: string;
  _id: string;
};

export type QuestionType = {
  _id: string;
  questionType: "radio" | "checkbox" | "text";
  choices: [choiceType];
  category?: string;
  questionText: string;
};
