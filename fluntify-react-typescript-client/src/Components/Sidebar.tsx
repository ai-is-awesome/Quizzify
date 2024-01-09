import { Box, Link, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PillButton } from "./UI/PillButton";
import { AuthContext } from "../useAuth";
import CustomButton from "./UI/CustomButton";

export const Sidebar: React.FC = (props) => {
  const authData = useContext(AuthContext);
  const isLoggedIn = authData.firebaseAuthState.isLoggedIn;
  const userName =
    authData.serverUserData.loadingStatus === "success"
      ? authData.serverUserData.data.name
      : "John Doe";
  return (
    <Box
      // bg={"gray.800"}
      minH={"100vh"}
      w={"25%"}
      display={"flex"}
      flexDir={"column"}
      gap={"2rem"}
      background={"blue.700"}
      color={"white"}
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props?.imageURL})`}
    >
      {/* Fluentify Box */}
      <Box justifyContent={"center"} display={"flex"} ml="2" mt="2">
        <Link
          fontSize={"2rem"}
          letterSpacing={1}
          // fontWeight={"bold"}
          textTransform={"uppercase"}
          href="/"
        >
          Quizzify
        </Link>
      </Box>
      <Box display={"flex"} alignItems={"center"} flexDir={"column"}>
        {isLoggedIn ? (
          <>
            <Text fontSize={"1.5rem"}>Welcome,</Text>
            <Text fontWeight={"bold"} fontSize={"1.5rem"}>
              {userName}
            </Text>
          </>
        ) : (
          <Text>
            <CustomButton as={"a"} href="/signup">
              Login
            </CustomButton>
          </Text>
        )}
      </Box>
      {/* <PillButton bg={"orange.500"} color={"white"}>
        Progress
      </PillButton> */}
    </Box>
  );
};
