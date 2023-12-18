import React, { useContext, useEffect } from "react";
import { AuthContext } from "../useAuth";
import { getUserData } from "../services";
import OnBoardForm from "./OnboardForm";
import { useNavigate } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
  forceOnboard?: boolean;
  sidebar?: boolean;
}

export default function DynamicRenderer({
  children,
  // forceOnboard = false,
  sidebar,
}: Props) {
  const authContext = useContext(AuthContext);
  const onBoarded: boolean = authContext?.isUserOnboarded();
  const isLoggedIn = authContext?.firebaseAuthState.isLoggedIn;
  const firebaseAuthStatus = authContext?.firebaseAuthState.status;
  const navigate = useNavigate();
  // const onBoarded: boolean = true;

  if (firebaseAuthStatus === "success" && isLoggedIn === false) {
    navigate("/landing");
  }

  if (
    authContext?.firebaseAuthState.status === "loading" ||
    authContext?.serverUserData.loadingStatus === "loading"
  ) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <Spinner />
      </Box>
    );
  }

  if (!onBoarded) {
    return <OnBoardForm />;
  }

  return (
    <>
      {sidebar && <Sidebar />}
      {children}
    </>
  );
}
