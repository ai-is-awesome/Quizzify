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
  return (
    <>
      <Heading size="md" mb="4">
        <chakra.p fontSize={"lg"}>{questionText}</chakra.p>
        <RadioInput choices={choices} mt="8" />
      </Heading>
    </>
  );
}
