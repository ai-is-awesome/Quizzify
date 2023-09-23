import { Heading } from "@chakra-ui/react";

export default function Question({ questionText, ...rest }) {
  return (
    <Heading mb={"2rem"} {...rest}>
      {questionText}
    </Heading>
  );
}
