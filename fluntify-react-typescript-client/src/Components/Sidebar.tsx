import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import { PillButton } from "./UI/PillButton";

export const Sidebar: React.FC = (props) => {
  return (
    <Box
      bg={"gray.100"}
      minH={"100vh"}
      w={"15%"}
      display={"flex"}
      flexDir={"column"}
      gap={"2rem"}
    >
      {/* Fluentify Box */}
      <Box justifyContent={"center"} display={"flex"}>
        <Link
          fontSize={"3xl"}
          letterSpacing={"tighter"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Fluentify
        </Link>
      </Box>
      <Box display={"flex"} alignItems={"center"} flexDir={"column"}>
        <Text fontSize={"1.5rem"}>Welcome,</Text>
        <Text fontWeight={"bold"} fontSize={"1.5rem"}>
          John Doe
        </Text>
      </Box>
      <PillButton bg={"orange.500"} color={"white"}>
        Progress
      </PillButton>
    </Box>
  );
};
