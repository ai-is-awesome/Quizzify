import { Box } from "@chakra-ui/react";
import React from "react";
import myTheme from "../../theme";

export default function CustomBox(props) {
  return <Box bg={"white"} padding={"12"} rounded="md" {...props} ></Box>;
}
