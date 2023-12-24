import React, { useEffect, useState } from "react";
import DynamicRenderer from "./DynamicRenderer";
import { Box, Button, Grid } from "@chakra-ui/react";
import { QuizCard } from "./QuizCard";
import { getApp } from "firebase/app";
import Layout from "./Layout";
import { getAllQuizzes } from "../services";
import { QuizType } from "../shared/types";

interface NewDashboardProps {
  children: React.ReactNode;
}

export const NewDashboard: React.FC<NewDashboardProps> = (props) => {
  const [data, setData] = useState<QuizType[]>([]);

  useEffect(() => {
    getAllQuizzes().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Layout sidebar={true} my="0" auth={false}>
      {/* Button Container */}
      <Box display={"flex"} gap="1" mb={"16"} mt="2">
        <Button flexGrow={"1"}>Explore</Button>
        <Button flexGrow={"1"}>Create Quiz</Button>
      </Box>
      {/* QUiz Card parent box */}
      <Grid
        gridTemplateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(3,1fr)" }}
        gap={"4"}
      >
        {data.map((quiz) => (
          <QuizCard
            quizName={quiz.name}
            numberOfQuestions={quiz.numberOfQuestions}
            quizCategory={quiz.category.name}
          />
        ))}
        <QuizCard
          quizName="Saturday Night Live"
          numberOfQuestions={5}
          quizCategory="Entertainment"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          bg="blue.500"

          // imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
        />
        <QuizCard
          quizName="Maths Quiz"
          numberOfQuestions={5}
          quizCategory="Education"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          // imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
          bg={"pink.500"}
        />
        <QuizCard
          quizName="Saturday Night Live"
          numberOfQuestions={5}
          quizCategory="Entertainment"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
        />
        <QuizCard
          quizName="Saturday Night Live"
          numberOfQuestions={5}
          quizCategory="Entertainment"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          // imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
          bg={"purple.500"}
        />

        <QuizCard
          quizName="Saturday Night Live"
          numberOfQuestions={5}
          quizCategory="Entertainment"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          // imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
          bg={"red.500"}
        />
        <QuizCard
          quizName="Saturday Night Live"
          numberOfQuestions={5}
          quizCategory="Entertainment"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          // imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
          bg={"yellow.500"}
        />
        <QuizCard
          quizName="Saturday Night Live"
          numberOfQuestions={5}
          quizCategory="Entertainment"
          quizDescription="This is a quiz about the famous Saturday Night Live show"
          // imageURL="https://unsplash.com/photos/1q9DdwR25Pk/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MDI4ODgyMTR8&force=true&w=2400"
          bg={"teal.500"}
        />
      </Grid>
    </Layout>
  );
};
