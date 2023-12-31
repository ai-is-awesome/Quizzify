import { Box, BoxProps, Button } from "@chakra-ui/react";
import React from "react";

interface PillButtonProps extends BoxProps {}
export const PillButton: React.FC<PillButtonProps> = (props) => {
  return (
    <Button
      px=".2rem"
      py=".3rem"
      rounded={"full"}
      textAlign={"center"}
      {...props}
    >
      {props.children}
    </Button>
  );
};
