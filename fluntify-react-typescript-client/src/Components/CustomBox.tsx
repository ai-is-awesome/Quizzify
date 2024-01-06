import { Box } from "@chakra-ui/react";
import React from "react";
import myTheme from "../../theme";

export default function CustomBox(props) {
  return (
    <Box
      bg={"blue.700"}
      backgroundImage={"linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))"}
      color="white"
      padding={"12"}
      rounded="md"
      {...props}
    ></Box>
  );
}
