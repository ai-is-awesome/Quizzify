import { Box, BoxProps, Button, Text } from "@chakra-ui/react";
import { IoTimer } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { BiUpvote, BiDownvote } from "react-icons/bi";

import React from "react";
import CustomButton from "./UI/CustomButton";
import { useNavigate } from "react-router-dom";
import { Upvote } from "./Upvote";
import { DownVote } from "./Downvote";

interface QuizCardProps extends BoxProps {
  quizName: string;
  quizCategory?: string;
  numberOfQuestions: number;
  quizDescription?: string;
  timeLimit?: string;
  imageURL?: string;
  quizid?: string;
  bgColor?: string;
}

export const QuizCard: React.FC<QuizCardProps> = (props) => {
  const navigate = useNavigate();
  console.log("background img: ", props.imageURL);
  return (
    <Box
      bg={"gray.100"}
      rounded={"md"}
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props?.imageURL})`}
      background={"blue.700"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      color={"white"}
      {...props}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        gap={"1rem"}
        p={"1rem"}
        // IDK why height works but it just works don't ask questions
        height={"100%"}
      >
        <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
          <Box
            display={"flex"}
            flexDir={"row"}
            justifyContent={"space-between"}
          >
            <Text
              fontSize={"1.5rem"}
              fontWeight={"semibold"}
              textOverflow={"clip"}
              whiteSpace={"nowrap"}
            >
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
          {props.quizCategory && (
            <Box display={"flex"} gap={".5rem"}>
              <Box
                as="a"
                cursor={"pointer"}
                bg={"green.500"}
                px=".5rem"
                py=".3rem"
                color={"white"}
                rounded={"xl"}
                width={"max-content"}
              >
                {props.quizCategory}
              </Box>
              <Box
                bg="white"
                width={"max-content"}
                px={".5rem"}
                display={"flex"}
                alignItems={"center"}
                rounded={"full"}
                fontWeight={"bold"}
                background="gray.800"
                color="white"
              >
                <Text>Questions: {props.numberOfQuestions}</Text>
              </Box>
            </Box>
          )}
          {/* Description Box */}
          <Box>{props?.quizDescription}</Box>
          {/* Lower box for number of question and cat */}
          <Box display={"flex"} alignItems={"center"} gap={"1rem"}></Box>
          <Box display={"flex"} gap={".5rem"}>
            {/* <FaThumbsUp color="white" /> */}
            <Upvote voted={false} />
            <DownVote voted={false} />
          </Box>
        </Box>
        <CustomButton
          onClick={() => navigate(`/quiz/${props.quizid}`)}
          // position={"absolute"}
          bottom={"10px"}
          // w={"50%"}
        >
          Attempt
        </CustomButton>
      </Box>
    </Box>
  );
};
