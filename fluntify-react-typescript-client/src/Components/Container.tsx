import { Box } from "@chakra-ui/react";

export default function Container({ children, ...otherprops }) {
  return (
    <Box
      width={{ lg: "60%" }}
      margin={"auto"}
      padding={{ lg: "4rem" }}
      {...otherprops}
    >
      {children}
    </Box>
  );
}
