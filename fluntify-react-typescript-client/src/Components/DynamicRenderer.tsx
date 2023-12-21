import React, { useContext, useEffect } from "react";
import { AuthContext } from "../useAuth";
import { getUserData } from "../services";
import OnBoardForm from "./OnboardForm";
import { useNavigate } from "react-router-dom";
import { Box, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export interface DynamicRendererProps {
  children: React.ReactNode;
  forceOnboard?: boolean;
  sidebar?: boolean;
  auth?: boolean;
}

export default function DynamicRenderer({
  children,
  // forceOnboard = false,
  sidebar,
  auth = false,
}: DynamicRendererProps) {
  const authContext = useContext(AuthContext);
  const onBoarded: boolean = authContext?.isUserOnboarded();
  const isLoggedIn = authContext?.firebaseAuthState.isLoggedIn;
  const firebaseAuthStatus = authContext?.firebaseAuthState.status;
  const isSmallScreen = useBreakpointValue({ base: true, lg: false, sm: true });
  const navigate = useNavigate();
  // const onBoarded: boolean = true;

  // If the firebase has loaded and the consumer is expecting an authenticated user then redirect, otherwise render children
  if (
    firebaseAuthStatus === "success" &&
    auth === true &&
    isLoggedIn === false
  ) {
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

  if (auth && !onBoarded) {
    return <OnBoardForm />;
  }

  if (sidebar) {
    return (
      <>
        <Box display={"flex"}>
          {!isSmallScreen && sidebar && <Sidebar />}
          {children}
        </Box>
      </>
    );
  } else {
    return <>{children}</>;
  }
}
