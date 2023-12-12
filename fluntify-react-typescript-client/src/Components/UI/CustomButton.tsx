import {
  Button,
  Link,
  Spinner,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import myTheme from "../../../theme";

interface CustomButtonProps extends ChakraButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  loading?: boolean;
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  children,
  loading,
  ...restOfTheProps
}) => {
  return (
    <Button
      as={"button"}
      cursor={"pointer"}
      backgroundColor={myTheme.white.bgColorPrimary}
      color={"white"}
      {...restOfTheProps}
    >
      {loading ? <Spinner /> : children}
    </Button>
  );
};

export default CustomButton;
