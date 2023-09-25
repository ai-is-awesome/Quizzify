import { Box } from "@chakra-ui/react";

export default function Container({ children, ...otherprops }) {
  return (
    <Box width={"60%"} margin={"auto"} padding="4rem" {...otherprops}>
      {children}
    </Box>
  );
}
