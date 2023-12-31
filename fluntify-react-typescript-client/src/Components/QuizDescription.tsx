import { Box, Text } from "@chakra-ui/react";
import { QuizType } from "../shared/types";
import React from "react";
import CustomButton from "./UI/CustomButton";

interface QuizDescriptionProps {
  children?: React.ReactNode;
  quizData: QuizType;
  onClick: () => void;
}

export const QuizDescription: React.FC<QuizDescriptionProps> = ({
  children,
  quizData,
  onClick,
}) => {
  return (
    <Box
      bg="gray.100"
      px="4"
      py="4"
      display={"flex"}
      flexDir={"column"}
      width={"60%"}
      mx="auto"

      // alignItems={"center"}
    >
      <Text textAlign={"center"} fontSize={"1.7rem"} fontWeight={"bold"} mb="4">
        {quizData.name}
      </Text>
      <Text>Timer : {quizData.isTimed === false ? "Untimed" : "Timed"}</Text>
      <Text>Number of Questions : {quizData.numberOfQuestions}</Text>
      <Text>Category : {quizData.category.name}</Text>
      <CustomButton mt="2rem" onClick={onClick}>
        Start Quiz
      </CustomButton>
    </Box>
  );
};
