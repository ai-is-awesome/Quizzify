import React from "react";
import Container from "./Container";
import Layout from "./Layout";
import CustomBox from "./CustomBox";
import { Heading, chakra } from "@chakra-ui/react";
import RadioInput from "./Radio/RadioInput";

export default function RadioQuestion({
  questionText,
  choices,
  currentQuestionIdx,
  TotalQuestion,
}) {
  console.log("radio render", choices);
  return (
    <>
      <Heading size="md" mb="4">
        <chakra.p fontSize={"lg"}>What is the meaning of "WHFOEH"</chakra.p>
        <RadioInput choices={choices} mt="8" />
      </Heading>
    </>
  );
}
