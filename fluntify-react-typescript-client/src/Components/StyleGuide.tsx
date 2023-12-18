import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { QuizCard } from "./QuizCard";

export const StyleGuide: React.FC<any> = (props) => {
  return (
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} mt={"6rem"}>
      <Box w={"50%"}>
        <Text>Below is the quiz card</Text>
        <QuizCard
          quizName="Saturday Night Live"
          numberOfQuestions={5}
          quizCategory="Entertainment"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
        />
      </Box>
    </Box>
  );
};
