import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Text,
  chakra,
} from "@chakra-ui/react";
import Container from "./Container";
import CustomBox from "../Components/CustomBox";
import { BsFillCheckCircleFill } from "react-icons/bs";
import TextOnImage from "./TextOnImage";
import myTheme from "../../../theme";
import { useContext, useState } from "react";
import { AuthContext } from "../../hooks/useAuth";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import Layout from "./Layout";
import DynamicRenderer from "./DynamicRenderer";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const { signUp, authError } = useContext(AuthContext);
  useAuthRedirect(true, "/");

  console.log(signUp);
  const onSubmit = (e) => {
    e.preventDefault();
    signUp(formData.email, formData.password).then(() => {
      console.log("SIGN UP SUCCESSFUL");
    });
  };

  return (
    <DynamicRenderer sidebar={false}>
      <Box>
        <Text
          textAlign={"center"}
          fontSize={"2rem"}
          py="2rem"
          fontWeight={"bold"}
        >
          Welcome to Quizzify
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          px="1.5rem"
          py="1.5rem"
          bg={"blue.700"}
          backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,.5))`}
          w="50%"
          mx="auto"
          minH="50vh"
          rounded="md"
        >
          <Text fontSize={"2rem"} fontWeight={"bold"} textAlign={"center"}>
            Sign Up
          </Text>
          <Box py="4">
            {authError && (
              <chakra.p color={"red.600"} fontWeight={"semibold"}>
                {authError.errorMessage}
              </chakra.p>
            )}
          </Box>
          <Box mb="2rem">
            Email Address
            <Input
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Box>

          <Grid templateColumns={"repeat(2, 1fr)"} gap="2rem" mb="2rem">
            <Box>
              First Name
              <Input placeholder="John" />
            </Box>
            <Box>
              Last Name
              <Input placeholder="Doe" />
            </Box>

            <Box>
              Password
              <Input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Box>
            <Box>
              Confirm Password
              <Input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </Box>
          </Grid>
          <Button bg="green.500" color="white">
            Sign up
          </Button>
        </Box>
      </Box>
    </DynamicRenderer>
  );
}
