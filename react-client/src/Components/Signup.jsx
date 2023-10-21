import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Link,
  Text,
  chakra,
} from "@chakra-ui/react";
import Container from "./Container";
import Layout from "./Layout";
import CustomBox from "./CustomBox";
import { BsFillCheckCircleFill } from "react-icons/bs";
import TextOnImage from "./TextOnImage";
import myTheme from "../../theme";
import { useState } from "react";

export default function Signup() {
  return (
    <Layout>
      <Container>
        <CustomBox>
          <Box>
            <Heading
              mb="4rem"
              textAlign={"center"}
              color={myTheme.primaryColor}
            >
              Sign up to get started
            </Heading>
            <Box
              bg="gray.100"
              p="4"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              rounded={"md"}
              mb="2rem"
            >
              <Heading
                fontSize={"2rem"}
                fontWeight={"semibold"}
                textAlign={"center"}
                mb={"1rem"}
              >
                Signup and get access to
              </Heading>
              <Box mb="1rem">
                <Box display={"flex"} alignItems={"center"} gap="1rem">
                  <BsFillCheckCircleFill color="green" fontSize={"1.6rem"} />
                  <Text
                    fontWeight={"black"}
                    fontSize={"1.5rem"}
                    color={myTheme.primaryColor}
                  >
                    Multiple Language Packs
                  </Text>
                </Box>
                <chakra.span textAlign={"center"} pl="2.5rem">
                  Based on your preferences
                </chakra.span>
              </Box>
              <Box>
                <Box display={"flex"} alignItems={"center"} gap="1rem">
                  <BsFillCheckCircleFill color="green" fontSize={"1.6rem"} />
                  <Text
                    fontWeight={"black"}
                    fontSize={"1.5rem"}
                    color={myTheme.primaryColor}
                  >
                    Statistics and Reports
                  </Text>
                </Box>
                <chakra.span pl="2.5rem">
                  personalized for your profile
                </chakra.span>
              </Box>
            </Box>
            <Box mb="2rem">
              Email Address
              <Input />
            </Box>
            <Grid templateColumns={"repeat(2, 1fr)"} gap="2rem" mb="2rem">
              <Box>
                First Name
                <Input />
              </Box>
              <Box>
                Last Name
                <Input />
              </Box>

              <Box>
                Password
                <Input type="password" />
              </Box>
              <Box>
                Confirm Password
                <Input type="password" />
              </Box>
            </Grid>
            <Heading size={"md"} mb="1rem" textAlign={"center"}>
              Subscribe to language packs
            </Heading>
            <Box display={"flex"} gap="3rem" justifyContent={"center"}>
              <TextOnImage
                mb="2rem"
                text="French"
                bg="linear-gradient(to right, blue 33%, white 33%, white 66%, red 66%)"
              />
              <TextOnImage
                mb="2rem"
                text="German"
                bg="linear-gradient(#000 33.333%, #FF0000 33.33% 66.666%, #FFCC00 66.666%)"
                url="https://unsplash.com/photos/mA0om-_p96U/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGdlcm1hbnxlbnwwfHx8fDE2OTE4ODY0Nzh8MA&force=true"
              />
              <TextOnImage
                mb="2rem"
                text="Italian"
                bg="linear-gradient(to right, #008C45 33%, #F4F9FF 33%, #F4F9FF 63%,  #CD212A 66%)"
                url="https://unsplash.com/photos/oRjGmKZLNHk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8aXRhbGlhbnxlbnwwfHx8fDE2OTE4ODY2MDR8MA&force=true"
              />
            </Box>
            <Box display={"flex"} justifyContent={"center"} mt="2rem">
              <Link
                href="/user"
                background={"green.500"}
                px="2"
                py="2"
                rounded={"md"}
                color="white"
              >
                Create Account
              </Link>
            </Box>
          </Box>
        </CustomBox>
      </Container>
    </Layout>
  );
}
