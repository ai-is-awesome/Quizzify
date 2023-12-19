import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.js";
import "./index.css";
import Quiz from "./Components/Quiz.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CardMatch from "./Components/CardMatch/CardMatch.jsx";

import Signup from "./Components/Signup.jsx";
import AuthProvider from "./useAuth.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import Debug from "./Components/Debug.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App user={{ status: "logout" }} />,
  },
  { path: "/debug", element: <Debug /> },
  // {
  //   path: "/cardmatch",
  //   element: (
  //     <>
  //       <CardMatch mode={"fullScreen"} />
  //     </>
  //   ),
  // },
  // { path: "quiz/:quizId", element: <Quiz /> },
  { path: "signup", element: <Signup /> },
  // {
  //   path: "/user",
  //   element: <App user={{ name: "Piyush Lamba", status: "loggedin" }} />,
  // },
  { path: "/landing", element: <LandingPage /> },
]);

const breakpoints = {
  base: "0em", // 0px
  sm: "20em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};
const theme = extendTheme({ breakpoints });

export const Main = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
