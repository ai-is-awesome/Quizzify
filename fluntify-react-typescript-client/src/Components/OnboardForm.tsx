import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

import { FormEvent, useContext, useState } from "react";
import Button from "./UI/CustomButton";
import useRequest from "../hooks/useRequest";
import { onboardUserService } from "../services";
import { AuthContext } from "../useAuth";
import { useNavigate } from "react-router-dom";

const OnBoardForm: React.FC = () => {
  const [name, setName] = useState("");
  const authObject = useContext(AuthContext);

  const { data, error, loading, fetch } = useRequest(
    () => {
      return onboardUserService({
        name: name,
        token: authObject?.firebaseAuthState.firebaseUserData?.accessToken,
      });
    },
    {
      successCallback: () => {
        window.location.reload();
      },
    }
  );

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitting");
    fetch();
  };

  return (
    <>
      <Box
        bg={"white"}
        // mx={{ lg: "20", sm: "4" }}
        rounded={"md"}
        py="4"
        color={"black"}
        w={"60%"}
        marginX={"auto"}
      >
        <form onSubmit={(e) => submitHandler(e)}>
          <Box textAlign={"center"}>
            <Heading textAlign={"center"} mb="4">
              Welcome to Fluentify
            </Heading>
            <Heading fontWeight={"normal"} fontSize={"1.5rem"}>
              Let's quickly get you started
            </Heading>
          </Box>
          <Box width={"50%"} m="auto">
            {/* Form container */}
            <Box my="4">
              <FormControl display={"flex"} alignItems={"center"}>
                <FormLabel>Enter your full name</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  backgroundColor="gray.200"
                  maxW={"400px"}
                />
              </FormControl>
              <Button
                bg={"green.500"}
                color={"white"}
                mt="4"
                w="100%"
                type="submit"
                loading={loading}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default OnBoardForm;
