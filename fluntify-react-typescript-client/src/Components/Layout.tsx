import { Box, BoxProps } from "@chakra-ui/react";
import DynamicRenderer, { DynamicRendererProps } from "./DynamicRenderer";

interface LayoutProps extends DynamicRendererProps, BoxProps {
  children: React.ReactNode;
  centered?: boolean;
}

import React from "react";

const Layout: React.FC<LayoutProps> = (
  props = { children: <></>, centered: true }
) => {
  return (
    <Box
      w={{ sm: "100%", lg: props.centered ? "90%" : "100%" }}
      mx={"auto"}
      my="4rem"
      {...props}
    >
      {props.children}
    </Box>
  );
};
export default Layout;
