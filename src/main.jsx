import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
