import React, { useContext } from "react";
import Container from "./Container";
import { AuthContext } from "../useAuth";
import { Box, Button, Heading } from "@chakra-ui/react";

export default function Debug() {
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  };
  return (
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
          >
            <Box bgColor={"gray.100"}>
              User status : {auth.isLoggedIn ? "Logged In" : "Logged Out"}
            </Box>
          </Box>
        </Box>
        <Button bgColor={"red.400"} color="white" onClick={logoutHandler}>
          Logout Current User
        </Button>
      </Box>
    </Container>
  );
}
