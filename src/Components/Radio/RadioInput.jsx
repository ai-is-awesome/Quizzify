import {
  RadioGroup,
  Radio,
  HStack,
  VStack,
  Box,
  Stack,
} from "@chakra-ui/react";

export default function RadioInput({ choices, ...otherprops }) {
  console.log("CHOIES INPUT: ", choices);
  return (
    <RadioGroup {...otherprops}>
      <Stack direction={"column"} gap={"6"}>
        {choices.map((choice) => {
          return <Radio key={choice}>{choice}</Radio>;
        })}
      </Stack>
    </RadioGroup>
  );
}
