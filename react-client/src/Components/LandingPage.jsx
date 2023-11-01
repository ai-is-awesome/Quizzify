import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../useAuth";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import myTheme, { getThemeObject } from "../../theme";
import { LandingPageFeatureUI, LandingPageWrapper } from "./UI/UiUtils";
import translate2 from "../assets/images/translate2.png";
import lp from "../assets/images/lp.png";
import LandingPageFeatures from "./LandingPageFeatures";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const authContext = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef();
  const navigate = useNavigate();

  const themeObj = getThemeObject("white");
  const landingPageData = {
    topFeatures: [
      {
        title: "Quizzes",
        desc: "Take part in quizzes and improve your language learning skills",
      },
      {
        title: "Translation",
        desc: "You can use the language translation right from within the dashboard",
      },
      {
        title: "Word of the day",
        desc: "Acquaint yourself with a new word to learn with a new word everytime you login",
      },
    ],
  };

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
        bg={getThemeObject("white")["bgColorPrimary"]}
        color={"white"}
        onClick={() => authContext.guestCheckout().then(() => navigate("/"))}
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
              fontSize={"1.7rem"}
              mx={"auto"}
              fontWeight={"bold"}
              letterSpacing={"tighter"}
              width={{ sm: "100%", lg: "95%" }}
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
              {landingPageData.topFeatures.map((featureObj) => (
                <LandingPageFeatureUI
                  key={featureObj.title}
                  featureTitle={featureObj.title}
                  desc={featureObj.desc}
                />
              ))}
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
        <LandingPageFeatures />
      </LandingPageWrapper>
    </Box>
  );
}
