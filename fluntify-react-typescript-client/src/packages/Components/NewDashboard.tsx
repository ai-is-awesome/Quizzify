import React, { useEffect, useState } from "react";
import DynamicRenderer from "./DynamicRenderer";
import { Box, Button, Grid, Spinner, Text } from "@chakra-ui/react";
import { IoIosCreate, IoIosKeypad } from "react-icons/io";
import { RiPhoneFindLine } from "react-icons/ri";
import { QuizCard } from "./QuizCard";
import { getApp } from "firebase/app";
import Layout from "./Layout";
import { getAllQuizzes } from "../../services";
import { QuizType } from "../shared/types";
import SearchForm from "./SearchForm";
import {
  quizAtom,
  quizSelector,
  searchQueryAtom,
} from "../../packages/recoil/atoms/quizListAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { TopBar } from "./Dashboard/TopBar";
import { SearchFormContainer } from "./Dashboard/SearchFormContainer";

interface NewDashboardProps {
  children?: React.ReactNode;
  loadingState?: boolean;
}

export const NewDashboard: React.FC<NewDashboardProps> = (props) => {
  const [data, setData] = useState<QuizType[]>([]);
  const [selectedButton, setSelectedButton] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchAtom, setSearchAtom] = useRecoilState(searchQueryAtom);
  const quizData = useRecoilValue(quizSelector);

  const loadingJSX = (
    <Box>
      <Spinner color="white" size={"xl"} />
    </Box>
  );

  console.log("Quiz data : ", quizData);

  useEffect(() => {
    setLoading(true);
    getAllQuizzes()
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <DynamicRenderer sidebar={true} loading={loading}>
        <Box>
          <TopBar />
          <SearchFormContainer />
          <Layout centered={true}>
            {/* QUiz Card parent box */}
            {loading ? (
              loadingJSX
            ) : (
              <Grid
                gridTemplateColumns={{
                  sm: "repeat(1, 1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap="4"
              >
                {quizData.map((quiz) => (
                  <QuizCard
                    quizName={quiz.name}
                    numberOfQuestions={quiz.numberOfQuestions}
                    quizCategory={quiz.category.name}
                    quizDescription={quiz.description}
                    quizid={quiz._id}
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
            )}
          </Layout>
        </Box>
      </DynamicRenderer>
    </>
  );
};
