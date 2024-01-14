import { Input, BoxProps } from "@chakra-ui/react";

interface TextInputProps extends BoxProps {}

export default function TextInput(props: TextInputProps) {
  return (
    <>
      <Input
        placeholder="Basic usage"
        padding={"1.5rem 1rem"}
        border="0px"
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props?.imageURL})`}
        background={"blue.700"}
        rounded={"md"}
        color="white"
        // borderBottom={"2px white solid"}
        borderRadius={"0"}
        fontSize={"1.5rem"}
        {...props}
      />
    </>
  );
}
