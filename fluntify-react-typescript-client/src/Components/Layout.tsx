import { Box, BoxProps } from "@chakra-ui/react";
import DynamicRenderer, { DynamicRendererProps } from "./DynamicRenderer";

interface LayoutProps extends DynamicRendererProps, BoxProps {
  children: React.ReactNode;
}

import React from "react";

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <DynamicRenderer {...props}>
      <Box w={{ sm: "100%", lg: "70%" }} mx={"auto"} my="4rem" {...props}>
        {props.children}
      </Box>
    </DynamicRenderer>
  );
};
export default Layout;
