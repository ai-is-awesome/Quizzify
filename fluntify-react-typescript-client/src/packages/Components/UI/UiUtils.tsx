import { Box, Text, chakra } from "@chakra-ui/react";
import { getThemeObject } from "../../../../theme";

export const LandingPageFeatureUI = ({ featureTitle, desc }) => {
  const themeObj = getThemeObject("white");
  return (
    <Box
      display={"flex"}
      flexDirection={{ sm: "column", lg: "row" }}
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
        color={themeObj.bgColorComplementary}
      >
        {featureTitle}
      </Text>
      <chakra.span flexGrow={"1"} marginLeft="1" alignSelf={"flex-start"}>
        {desc}
      </chakra.span>
    </Box>
  );
};

export const LandingPageWrapper = ({ children, level = 1 }) => {
  if (level === 1) {
    return <Box px={{ sm: "4", lg: "20" }}>{children}</Box>;
  } else if (level === 2) {
    return <Box px={{ sm: "4", lg: "40" }}>{children}</Box>;
  }
};
