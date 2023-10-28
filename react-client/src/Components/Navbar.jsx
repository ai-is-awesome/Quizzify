import { Box, HStack, Heading, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../useAuth";

export default function Navbar({ user }) {
  const authContext = useContext(AuthContext);

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
      <HStack
        px={{ lg: "20", sm: "4" }}
        py={{ lg: "20", sm: "2" }}
        justifyContent={"space-between"}
      >
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
