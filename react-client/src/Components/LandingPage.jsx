import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../useAuth";
import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import myTheme, { getThemeObject } from "../../theme";
import { LandingPageFeatureUI, LandingPageWrapper } from "./UI/UiUtils";

export default function LandingPage() {
  const authContext = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef();
  console.log(authContext);
  const themeObj = getThemeObject("white");

  useEffect(() => {
    const handeScroll = () => {
      const buttonOffset = buttonRef.current.offsetTop;
      const scrollPos = window.scrollY;
      if (scrollPos > buttonOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handeScroll);
    return () => {
      window.removeEventListener("scroll", handeScroll);
    };
  }, []);

  const stickyJSX = (
    <Center
      position={"sticky"}
      top={"0"}
      boxShadow={"md"}
      py="4"
      gap={"8"}
      bg={"gray.200"}
      animation={"all ease-in 3s"}
    >
      <Button
        as={"a"}
        href="/signup"
        bg={getThemeObject("white")["bgColorComplementary"]}
        color={"white"}
      >
        Login
      </Button>

      <Button
        as={"a"}
        href="/signup"
        bg={getThemeObject("white")["bgColorPrimary"]}
        color={"white"}
      >
        Checkout as a guest
      </Button>
    </Center>
  );

  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
    >
      {isSticky && stickyJSX}
      <Heading
        my={{ lg: "8", sm: "4" }}
        textAlign={{ sm: "center", lg: "center" }}
        fontSize={"5xl"}
        letterSpacing={"-.05em"}
        color={getThemeObject("white")["bgColorComplementary"]}
      >
        Welcome to Fluentify
      </Heading>
      <LandingPageWrapper>
        <Grid templateColumns={{ lg: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }}>
          <Image
            src="https://unsplash.com/photos/ORDz1m1-q0I/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNjI2ODA5fA&force=true&w=2400"
            maxW={{ sm: "90%", lg: "100%" }}
            mx={"auto"}
            my="4"
            rounded={"2xl"}
          />
          <Box
            mb="2"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{ lg: "center" }}
            alignItems={"center"}
            minH={{ lg: "80vh" }}
          >
            {/* <Heading
            my={{ lg: "8", sm: "4" }}
            textAlign={{ sm: "center", lg: "left" }}
            fontSize={"5xl"}
            letterSpacing={"-.05em"}
            color={getThemeObject("white")["bgColorComplementary"]}
          >
            Welcome to Fluentify
          </Heading> */}
            <Box
              fontSize={"lg"}
              mx={"auto"}
              fontWeight={"bold"}
              width={{ sm: "100%", lg: "75%" }}
              textAlign={{ sm: "center" }}
              mb="8"
            >
              A new platform for learning language quickly. Learn and improve at
              any time of the time at your convinience
            </Box>
            {/* Features box */}
            <Box
              // border={"2px solid"}
              // borderColor={"gray.300"}
              // borderStyle={"solid"}
              w="75%"
              mb="8"
            >
              <LandingPageFeatureUI
                featureTitle={"Feature 2"}
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quis libero nesciunt nemo minima. Pariatur illo placeat repellat! Est, quod?"
              />
              <LandingPageFeatureUI
                featureTitle={"Translation"}
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laboriosam consectetur dicta pariatur possimus debitis quidem
                expedita eius, illum suscipit!"
              />
              <LandingPageFeatureUI
                featureTitle={"Translation"}
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                laboriosam consectetur dicta pariatur possimus debitis quidem
                expedita eius, illum suscipit!"
              />
            </Box>
            {/* Button container */}
            <Box
              display={"flex"}
              flexDirection={{ sm: "column", lg: "row" }}
              gap="4"
              ref={buttonRef}
            >
              <Button
                as={"a"}
                href="#features"
                bg={getThemeObject("white")["bgColorPrimary"]}
                color={"white"}
              >
                Checkout the latest features
              </Button>
              <Button
                as={"a"}
                href="/signup"
                bg={getThemeObject("white")["bgColorComplementary"]}
                color={"white"}
              >
                Signup or Use as Guest
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Features */}
        <Box minH="100vh" maxW={"1200px"} mx={"auto"}>
          <Heading
            my={{ lg: "16", sm: "4" }}
            textAlign={{ sm: "center", lg: "center" }}
            fontSize={"5xl"}
            letterSpacing={"-.05em"}
            color={getThemeObject("white")["bgColorComplementary"]}
            id="features"
          >
            Features
          </Heading>
          {/* Flex box of features */}
          <Box
            display={{ sm: "flex", lg: "flex" }}
            flexDirection={{ sm: "column", lg: "row" }}
            justifyContent={{ sm: "center", lg: "left" }}
            alignItems={{ sm: "center", lg: "normal" }}
            gap="4rem"
            my="6rem"
          >
            <Img
              src="https://unsplash.com/photos/5Z8mR4vqJD4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk4NDEwOTcxfA&force=true&w=1920"
              flexGrow={"0"}
              maxW={"600px"}
              rounded={"2xl"}
              maxWidth={{ sm: "80%", lg: "600px" }}
            />
            <Box width={"100%"}>
              {/* Title of feature */}
              <Text
                fontWeight={"extrabold"}
                fontSize={"2rem"}
                letterSpacing={"tight"}
                color={themeObj.bgColorPrimary}
                textAlign={"center"}
                mb="12"
              >
                Translation
              </Text>
              <Text
                fontSize={"1.2rem"}
                letterSpacing={"tight"}
                lineHeight={"1.5"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                officiis, excepturi molestias adipisci harum veritatis aliquam
                illum quae doloribus ipsam corporis iste minima at nostrum
                maiores culpa ipsa natus tenetur!
              </Text>
            </Box>
          </Box>
          {/* Flex box of features */}
          <Box
            display={{ sm: "flex", lg: "flex" }}
            flexDirection={{ sm: "column", lg: "row" }}
            justifyContent={{ sm: "center", lg: "left" }}
            alignItems={{ sm: "center", lg: "normal" }}
            gap="4rem"
          >
            <Img
              src="https://unsplash.com/photos/5Z8mR4vqJD4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk4NDEwOTcxfA&force=true&w=1920"
              flexGrow={"0"}
              maxW={"600px"}
              rounded={"2xl"}
              maxWidth={{ sm: "80%", lg: "600px" }}
            />
            <Box width={"100%"}>
              {/* Title of feature */}
              <Text
                fontWeight={"extrabold"}
                fontSize={"2rem"}
                letterSpacing={"tight"}
                color={themeObj.bgColorPrimary}
                textAlign={"center"}
                mb="12"
              >
                Language Packs
              </Text>
              <Text
                fontSize={"1.2rem"}
                letterSpacing={"tight"}
                lineHeight={"1.5"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                officiis, excepturi molestias adipisci harum veritatis aliquam
                illum quae doloribus ipsam corporis iste minima at nostrum
                maiores culpa ipsa natus tenetur!
              </Text>
            </Box>
          </Box>
        </Box>
      </LandingPageWrapper>
    </Box>
  );
}
