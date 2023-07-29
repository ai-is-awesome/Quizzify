import { Box, Heading } from "@chakra-ui/react";
import QuizDashboardItem from "../Components/QuizDashboardItem/QuizDashboardItem";

export default function Dashboard({ quizzes }) {
  return (
    <Box>
      {quizzes.status === "loading" && <p>LOADINGp</p>}
      <Heading>Select a quiz from the following</Heading>
      <Box bg={"white"}>
        {quizzes.data &&
          quizzes.data.map((quiz) => (
            <QuizDashboardItem key={quiz._id} data={quiz} />
          ))}
      </Box>
    </Box>
  );
}
