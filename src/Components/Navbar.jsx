import { Box, HStack, Heading, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <HStack p={"20"} justifyContent={"space-between"}>
        <Link
          fontSize={"4xl"}
          letterSpacing={"tighter"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Fluentify
        </Link>
        <Box>
          <Heading as="h3" fontSize={"1.2rem"}>
            Login
          </Heading>
        </Box>
      </HStack>
    </>
  );
}
