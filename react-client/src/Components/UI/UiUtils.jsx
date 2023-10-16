import { Box, Text, chakra } from "@chakra-ui/react";

export const LandingPageFeatureUI = ({ featureTitle, desc }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      mb="4"
    >
      <Text
        fontWeight={"bold"}
        fontSize={"1.5rem"}
        letterSpacing={"tight"}
        flexShrink={0} // Prevent the left section from shrinking
        flexBasis={"25%"}
        mr="4"
      >
        {featureTitle}
      </Text>
      <chakra.span flexGrow={"1"} marginLeft="1" alignSelf={"flex-start"}>
        {desc}
      </chakra.span>
    </Box>
  );
};
