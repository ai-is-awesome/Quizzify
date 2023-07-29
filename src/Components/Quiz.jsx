import React, { useEffect, useState } from "react";
import { Button, chakra } from "@chakra-ui/react";
import useQuiz from "../hooks/useQuiz";

import { quizData } from "../../mockData";
import Layout from "./Layout";
import Container from "./Container";
import {
  useLoaderData,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import myTheme from "../../theme";
import QuizMaster from "./QuizMaster/QuizMaster";

export default function Quiz() {
  const { currentQuestionIdx, currentQuestionObject, proceedToNextQuestion } =
    useQuiz(quizData);

  const [renderQuizMaster, setRenderQuizMaster] = useState(false);

  const match = useMatch("/quiz/:quizId");
  let { quizId } = useParams();

  useEffect(() => {}, []);

  if (renderQuizMaster) {
    return <QuizMaster />;
  } else
    return (
      <Layout>
        <Container>
          <Box
            bg="white"
            rounded={"md"}
            minH={"50vh"}
            padding="12"
            position={"relative"}
          >
            <Heading mb="8">Prononciation Quiz</Heading>
            <chakra.p>This quiz has 5 Questions</chakra.p>
            <Button
              bg={myTheme.primaryColor}
              color="white"
              position={"absolute"}
              bottom="10"
              onClick={() => setRenderQuizMaster(true)}
            >
              Start Learning!
            </Button>
          </Box>
        </Container>
      </Layout>
    );
}
