import { Button, Link, Spinner } from "@chakra-ui/react";
import myTheme from "../../../theme";

export default function CustomButton({
  variant,
  children,
  loading,
  ...restOfTheProps
}) {
  const variants = {
    primary: {
      backgroundColor: myTheme.colors.primaryColor,
      // Add other primary variant styles if needed
    },
    // Add other variants and their respective styles here
  };

  const buttonStyles = variants[variant];

  return (
    <Button
      as={"a"}
      cursor={"pointer"}
      backgroundColor={myTheme.white.bgColorPrimary}
      color={"white"}
      {...restOfTheProps}
    >
      {loading ? <Spinner /> : children}
    </Button>
  );
}
