import { Box, BoxProps, Button } from "@chakra-ui/react";
import React from "react";

interface PillButtonProps extends BoxProps {}
export const PillButton: React.FC<PillButtonProps> = (props) => {
  return (
    <Button
      px=".7rem"
      py=".5rem"
      rounded={"lg"}
      textAlign={"center"}
      {...props}
    >
      {props.children}
    </Button>
  );
};
