import React from "react";
import RadioQuestion from "../RadioQuestion";
import { QuestionType } from "../../shared/types";
import { Box, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";

interface QuestionMasterProps {
  questionObject: QuestionType;
  children: React.ReactNode;
  onChange: (v: string) => void;
}

const QuestionMaster: React.FC<QuestionMasterProps> = ({
  questionObject,
  children,
  onChange,
}) => {
  const questionType = questionObject.questionType;

  const choices = questionObject.choices;

  if (questionType === "radio") {
    return (
      <Box px={"1rem"} py="1rem">
        <Text fontSize={"2rem"} fontWeight={"semibold"}>
          {questionObject.questionText}
        </Text>
        <RadioGroup onChange={(v) => onChange(v)} my="1rem">
          <VStack alignItems={"start"}>
            {choices.map((choice) => {
              return (
                <Radio value={choice.choiceText}>{choice.choiceText}</Radio>
              );
            })}
          </VStack>
        </RadioGroup>
      </Box>
    );
  }
};

export default QuestionMaster;
