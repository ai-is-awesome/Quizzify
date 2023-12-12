import React, { useContext } from "react";
import Container from "./Container";
import { AuthContext } from "../useAuth";
import { Box, Button, Heading } from "@chakra-ui/react";
import DynamicRenderer from "./DynamicRenderer";

export default function Debug() {
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth?.logout();
  };

  const loadingJsx = (
    <Container>
      <Box>Firebase Status : Loading </Box>
    </Container>
  );

  console.log("debug page : ", auth);
  if (auth?.firebaseAuthState.status === "loading") {
    return loadingJsx;
  }

  return (
    // <DynamicRenderer>
    <Container>
      <Box>
        <Heading as="h1" mb="4">
          Debug
        </Heading>
        {/* System status */}
        <Box my="8">
          <Heading as="h3" fontSize={"1.2rem"} fontWeight={"normal"}>
            System Status
          </Heading>
          <Box
            bgColor={"gray.300"}
            display={"grid"}
            gridTemplateColumns={"1fr 1fr 1fr"}
            p="4"
            gap={"1rem"}
          >
            <Box bgColor={"gray.100"}>
              User status :{" "}
              {auth?.firebaseAuthState.isLoggedIn ? "Logged In" : "Logged Out"}
            </Box>
            <Box bgColor={"gray.100"} p="2">
              Firebase UID : {auth?.firebaseAuthState?.firebaseUserData?.uid}
            </Box>
            <Box bgColor={"gray.100"} p="2">
              Firebase ID token :{" "}
              {auth?.firebaseAuthState?.firebaseUserData?.accessToken}
            </Box>
            <Box bgColor={"gray.100"} p="2">
              Onboarding Status :{" "}
              {(auth?.serverUserData.loadingStatus === "success") &
                auth?.serverUserData.data}
            </Box>
          </Box>
        </Box>
        <Button bgColor={"red.400"} color="white" onClick={logoutHandler}>
          Logout Current User
        </Button>
      </Box>
    </Container>
    // </DynamicRenderer>
  );
}
