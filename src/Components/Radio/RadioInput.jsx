import {
  RadioGroup,
  Radio,
  HStack,
  VStack,
  Box,
  Stack,
} from "@chakra-ui/react";

export default function RadioInput({ choices, ...otherprops }) {
  return (
    <RadioGroup {...otherprops}>
      <Stack direction={"column"} gap={"6"}>
        {choices.map((choice) => {
          return <Radio key={choice._id}>{choice.choiceText}</Radio>;
        })}
      </Stack>
    </RadioGroup>
  );
}
