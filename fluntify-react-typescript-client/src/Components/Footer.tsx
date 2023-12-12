import { Box } from "@chakra-ui/react";
import React from "react";
import { getThemeObject } from "../../theme";

export default function Footer() {
  const themeObj = getThemeObject("white");
  return (
    <Box bg={themeObj.bgColorComplementary} color={"white"}>
      <Box maxW={"lg"} margin={"auto"} py="2rem">
        @Fluentify
      </Box>
    </Box>
  );
}
