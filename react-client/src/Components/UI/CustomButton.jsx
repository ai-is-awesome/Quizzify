import { Button, Link } from "@chakra-ui/react";
import myTheme from "../../../theme";

export default function CustomButton({ variant, children, ...restOfTheProps }) {
  const variants = {
    primary: {
      backgroundColor: myTheme.primaryColor,
      // Add other primary variant styles if needed
    },
    // Add other variants and their respective styles here
  };

  const buttonStyles = variants[variant];

  return (
    <Button
      as={"a"}
      cursor={"pointer"}
      {...restOfTheProps}
      backgroundColor={myTheme.primaryColor}
      color={"white"}
    >
      {children}
    </Button>
  );
}
