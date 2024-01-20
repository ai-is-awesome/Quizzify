import { Box, Text } from "@chakra-ui/react";
import { MdTimerOff } from "react-icons/md";

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
      bg="blue.700"
      backgroundImage={"linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))"}
      color="white"
      px="4"
      py="4"
      display={"flex"}
      gap=".5rem"
      rounded={"md"}
      flexDir={"column"}
      width={"60%"}
      mx="auto"
      fontSize={"1.2rem"}

      // alignItems={"center"}
    >
      <Text textAlign={"center"} fontSize={"1.7rem"} fontWeight={"bold"} mb="4">
        {quizData.name}
      </Text>
      <Box display={"flex"} flexDir={"row"} alignItems={"center"} gap=".5rem">
        {quizData.isTimed === true ? (
          <>
            <Text>Timer : </Text>
            <MdTimerOff fontsize="1.6rem" />
          </>
        ) : (
          <>
            <Text>Timer : </Text>
            <MdTimerOff />
          </>
        )}
      </Box>
      <Text>Number of Questions : {quizData.numberOfQuestions}</Text>
      <Text>Category : {quizData.category.name}</Text>
      <CustomButton mt="2rem" onClick={onClick}>
        Start Quiz
      </CustomButton>
    </Box>
  );
};
