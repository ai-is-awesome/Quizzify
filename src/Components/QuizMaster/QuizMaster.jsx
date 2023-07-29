import { Box, Button, Heading, Stack, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomBox from "../CustomBox";
import { Radio, RadioGroup } from "@chakra-ui/react";

import Layout from "../Layout";
import Container from "../Container";
import RadioInput from "../Radio/RadioInput";
import { useParams } from "react-router-dom";
import { getQuizById } from "../../services";
import QuestionMaster from "../QuestionMaster/QuestionMaster";
import useQuiz from "../../hooks/useQuiz";

export default function QuizMaster(props) {
  let { quizId } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    currentQuestionIdx,
    proceedToNextQuestion,
    isLastQuestion,
    questions,
  } = useQuiz(quizData);

  useEffect(() => {
    getQuizById(quizId)
      .then((data) => {
        setQuizData(data.data);
      })
      .finally(() => setLoading(false));
  }, [quizId]);

  const submitQuiz = () => {};

  const btnJSX = !isLastQuestion() ? (
    <Button position={"absolute"} bottom="8" onClick={proceedToNextQuestion}>
      Next Question
    </Button>
  ) : (
    <Button
      bg="green.500"
      color={"white"}
      position={"absolute"}
      bottom="8"
      _hover={{ bg: "green.300" }}
    >
      Submit Quiz
    </Button>
  );

  if (loading) {
    return <>Loading</>;
  }
  return (
    <Layout>
      <Container>
        <CustomBox minH="40vh" position="relative">
          {questions.length !== 0 && (
            <QuestionMaster questionObject={questions[currentQuestionIdx]} />
          )}
          {btnJSX}
        </CustomBox>
        ;
      </Container>
    </Layout>
  );
}
