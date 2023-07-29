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
  const [quizData, setQuizData] = useState({});
  const { currentQuestionIdx, proceedToNextQuestion } = useQuiz(quizData);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = quizData.questions;
  console.log("QUESTIONS ARE ", questions);
  const totalQuestions = questions ? questions.length : 0;
  useEffect(() => {
    getQuizById(quizId).then((data) => {
      setQuizData(data.data);
    });
  }, [quizId]);

  return (
    <Layout>
      <Container>
        <CustomBox minH="40vh" position="relative">
          {questions && (
            <QuestionMaster questionObject={questions[currentQuestion]} />
          )}
          <Button position={"absolute"} bottom="8">
            Next Question
          </Button>
        </CustomBox>
        ;
      </Container>
    </Layout>
  );
}
