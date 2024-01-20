import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../useAuth";
import { getUserData } from "../../services";
import OnBoardForm from "./OnboardForm";
import { useNavigate } from "react-router-dom";
import { Box, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export interface DynamicRendererProps {
  children: React.ReactNode;
  forceOnboard?: boolean;
  sidebar?: boolean;
  auth?: boolean;
  loading?: boolean;
}

export default function DynamicRenderer({
  children,
  // forceOnboard = false,
  sidebar,
  auth = false,
  loading = false,
}: DynamicRendererProps) {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false, sm: true });
  const loadingJSX = (
    <Box display={"flex"} bg={"gray.800"}>
      {!isSmallScreen && sidebar && <Sidebar />}
      <Box
        display={"flex"}
        justifyContent={"center"}
        w={"100%"}
        alignItems={"center"}
      >
        <Spinner color="white" size={"xl"} />
      </Box>
    </Box>
  );

  const authContext = useContext(AuthContext);
  const onBoarded: boolean = authContext?.isUserOnboarded();
  const isLoggedIn = authContext?.firebaseAuthState.isLoggedIn;
  const firebaseAuthStatus = authContext?.firebaseAuthState.status;

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

  // Loading state
  if (
    authContext?.firebaseAuthState.status === "loading" ||
    authContext?.serverUserData.loadingStatus === "loading" ||
    loading
  ) {
    return loadingJSX;
  }

  if (auth && !onBoarded) {
    return <OnBoardForm />;
  }

  if (sidebar) {
    return (
      <>
        <Box display={"flex"} bg={"gray.800"}>
          {!isSmallScreen && sidebar && <Sidebar />}
          {children}
        </Box>
      </>
    );
  } else {
    return <>{children}</>;
  }
}
