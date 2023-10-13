import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import Quiz from "./Components/Quiz.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardMatch from "./Components/CardMatch/CardMatch.jsx";
import Navbar from "./Components/Navbar.jsx";
import Signup from "./Components/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App user={{ status: "logout" }} />,
  },
  {
    path: "/cardmatch",
    element: (
      <>
        <CardMatch mode={"fullScreen"} />
      </>
    ),
  },
  { path: "quiz/:quizId", element: <Quiz /> },
  { path: "signup", element: <Signup /> },
  {
    path: "/user",
    element: <App user={{ name: "Piyush Lamba", status: "loggedin" }} />,
  },
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
