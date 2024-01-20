import {
  Box,
  Button,
  Heading,
  Link,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomBox from "../CustomBox";
import { Radio, RadioGroup } from "@chakra-ui/react";

import Layout from "../Layout";
import Container from "../Container";
import RadioInput from "../Radio/RadioInput";
import { useParams } from "react-router-dom";
import { getQuizById } from "../../services";
import QuestionMaster from "../QuestionMaster/QuestionMaster";
import useQuiz from "../../../hooks/useQuiz";
import DynamicRenderer from "../DynamicRenderer";
import { QuizType } from "../../shared/types";
import CustomButton from "../UI/CustomButton";
import { QuizDescription } from "../QuizDescription";
import { PillButton } from "../UI/PillButton";

export default function QuizMaster(props) {
  const localData = {
    _id: "65882313808a97c8063fdf24",
    name: "Tech Quiz",
    questions: [
      {
        questionText: "what is the name of you?",
        questionType: "radio",
        choices: [
          { choiceText: "First" },
          { choiceText: "Second" },
          { choiceText: "Third" },
        ],
      },
      {
        questionText: "Another question",
        questionType: "radio",
        choices: [
          { choiceText: "First" },
          { choiceText: "Second" },
          { choiceText: "Third" },
        ],
      },
    ],
    numberOfQuestions: 0,
    upvotes: [],
    downvotes: [],
    created_by: "656512e7bcc3011be2fd9e13",
    category: { name: "Entertainment" },
    description:
      "This is a basic tech quiz that assess general tech knowledge.",
    isTimed: false,
    created_at: "2023-12-24T12:24:51.245Z",
    __v: 0,
  };

  let { quizId } = useParams();
  const [quizData, setQuizData] = useState<QuizType>(localData);

  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const {
    currentQuestionIdx,
    proceedToNextQuestion,
    isLastQuestion,
    questions,
    quizState,
    startQuiz,
  } = useQuiz(quizData);

  // useEffect(() => {
  //   getQuizById(quizId)
  //     .then((data) => {
  //       setQuizData(data.data);
  //     })
  //     .finally(() => setLoading(false));
  // }, [quizId]);

  const submitQuiz = () => {};

  const btnJSX = !isLastQuestion() ? (
    <Button onClick={proceedToNextQuestion} my="1rem">
      Next Question
    </Button>
  ) : (
    <Button
      bg="green.500"
      color={"white"}
      _hover={{ bg: "green.300" }}
      onClick={() => setSubmit(true)}
      my="1rem"
    >
      Submit Quiz
    </Button>
  );

  if (loading) {
    return <>Loading</>;
  }

  if (quizState === "not initialized") {
    return (
      <DynamicRenderer sidebar={true}>
        <Layout>
          <QuizDescription quizData={quizData} onClick={() => startQuiz()} />
        </Layout>
      </DynamicRenderer>
    );
  } else if (quizState === "started") {
    return (
      <DynamicRenderer sidebar={true}>
        <Layout centered={true} width={"50%"} mx="auto">
          <Text color={"white"}>fewofjewf</Text>
          <CustomBox minH="40vh" position="relative">
            {questions.length !== 0 && (
              <Box>
                <Text fontWeight={"bold"} fontSize={"2rem"} mb="1rem">
                  {quizData.name}
                </Text>
                <Box my=".5rem">
                  <PillButton bg={"purple.600"} color="white">
                    {quizData.category.name}
                  </PillButton>
                </Box>
                <Box
                  bg="blue.700"
                  backgroundImage={
                    "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))"
                  }
                  mt="2rem"
                  // color="black"
                  rounded="md"
                >
                  <QuestionMaster
                    questionObject={questions[currentQuestionIdx]}
                  />
                </Box>
              </Box>
            )}
            {!submit && btnJSX}
            {submit && (
              <Link color={"green.500"} href="/user">
                Quiz Submitted click here to go to home
              </Link>
            )}
          </CustomBox>
        </Layout>
      </DynamicRenderer>
    );
  }
}
