import { Box, BoxProps, Button, Text } from "@chakra-ui/react";
import { IoTimer } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { BiUpvote, BiDownvote } from "react-icons/bi";

import React from "react";
import CustomButton from "./UI/CustomButton";

interface QuizCardProps {
  quizName: string;
  quizCategory?: string;
  numberOfQuestions: number;
  quizDescription?: string;
  timeLimit?: string;
  imageURL?: string;
}

export const QuizCard: React.FC<QuizCardProps> = (props) => {
  console.log("background img: ", props.imageURL);
  return (
    <Box
      bg={"gray.100"}
      rounded={"md"}
      p={"1rem"}
      display={"flex"}
      flexDir={"column"}
      gap={"1rem"}
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props?.imageURL})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      color={"white"}
    >
      <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"}>
        <Text fontSize={"1.5rem"} fontWeight={"semibold"}>
          {props.quizName}
        </Text>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={".5rem"}
        >
          <IoTimer />
          <Text fontSize={"1.5rem"} fontWeight={"semibold"}>
            30s
          </Text>
        </Box>
      </Box>
      {/* Description Box */}
      <Box>{props?.quizDescription}</Box>
      {/* Lower box for number of question and cat */}
      <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
        <Box
          bg="white"
          width={"max-content"}
          p={".5rem"}
          rounded={"md"}
          fontWeight={"bold"}
        >
          <Text color={"black"}>Q: {props.numberOfQuestions}</Text>
        </Box>
        {props.quizCategory && (
          <Button bg={"green.500"} p=".4rem" color={"white"} rounded={"md"}>
            {props.quizCategory}
          </Button>
        )}
      </Box>
      <Box display={"flex"} gap={".5rem"}>
        {/* <FaThumbsUp color="white" /> */}
        <BiUpvote fontSize="1.5rem" />
        <BiDownvote fontSize="1.5rem" />
      </Box>

      <CustomButton>Attempt</CustomButton>
    </Box>
  );
};
