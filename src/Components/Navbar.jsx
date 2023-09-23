import { Box, HStack, Heading, Link } from "@chakra-ui/react";
import { AiOutlineLogin } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Navbar({ user }) {
  console.log(user);
  const jsx =
    user.status === "logout" ? (
      <Box display={"flex"} alignItems={"center"} gap="4">
        <AiOutlineLogin fontSize={"1.5rem"} transform="translateY(-2px)" />
        <Heading as="h3" fontSize={"2rem"}>
          <Link href="/signup">Login</Link>
        </Heading>
      </Box>
    ) : (
      <Box display={"flex"} alignItems={"center"} gap="4">
        <Heading fontSize={"1.4rem"} cursor={"pointer"} _hover={{}}>
          {user.name}
        </Heading>
        <CgProfile color="white" fontSize={"1.5rem"} cursor={"pointer"} />
      </Box>
    );
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
        {jsx}
      </HStack>
    </>
  );
}
