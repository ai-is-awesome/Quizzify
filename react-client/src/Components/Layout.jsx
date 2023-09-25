import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box minH={"100vh"} background={"#116A7B"}>
      {children}
    </Box>
  );
}
