import { Box, Center, Grid, Heading, Image, Img, Text } from "@chakra-ui/react";
import React from "react";
import { getThemeObject } from "../../theme";
import translate2 from "../assets/images/translate2.png";
import lp from "../assets/images/lp.png";

export default function LandingPageFeatures() {
  const themeObj = getThemeObject("white");
  return (
    <Box minH="100vh" maxW={"1200px"} mx={"auto"}>
      {/* Features */}
      {/* Feature container */}
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
      {/* Feaeture 1 box */}
      <Grid
        gridTemplateColumns={{
          sm: "80%",
          lg: "minmax(0, 1fr) minmax(0, 1fr)",
        }}
        rowGap="5rem"
        columnGap={"4rem"}
      >
        <Img
          src={translate2}
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
          <Text fontSize={"1.2rem"} letterSpacing={"tight"} lineHeight={"1.5"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            officiis, excepturi molestias adipisci harum veritatis aliquam illum
            quae doloribus ipsam corporis iste minima at nostrum maiores culpa
            ipsa natus tenetur!
          </Text>
        </Box>

        {/* SEcond feature */}
        <Img
          src={lp}
          flexGrow={"0"}
          w={"600px"}
          h={"400px "}
          backgroundPosition={"center"}
          rounded={"2xl"}
          // maxWidth={{ sm: "80%", lg: "600px" }}
          maxW={{ sm: "80%", lg: "600px" }}
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
          <Text fontSize={"1.2rem"} letterSpacing={"tight"} lineHeight={"1.5"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            officiis, excepturi molestias adipisci harum veritatis aliquam illum
            quae doloribus ipsam corporis iste minima at nostrum maiores culpa
            ipsa natus tenetur!
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
