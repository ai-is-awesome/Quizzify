import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function TransparentBox({
  headingText,
  headingProps,
  children,
}) {
  return (
    <>
      <Box mt="8">
        <Heading mb="4" textAlign={"center"} {...headingProps}>
          {headingText}
        </Heading>
        <Box bg="#55A0AF" p="8" rounded={"md"}>
          {children}
        </Box>
      </Box>
    </>
  );
}
