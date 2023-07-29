import { Box, ChakraBaseProvider } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import myTheme from "../../../theme";
export default function QuizDashboardItem({ data }) {
  return (
    <Box bg={"gray.200"} p="4" my="8" rounded="md" color={"black"}>
      <chakra.a
        mb="4"
        fontSize={"xl"}
        letterSpacing={"tight"}
        fontWeight={"bold"}
        _hover={{ bg: "blue.500", cursor: "pointer" }}
        href={`/quiz/${data._id}`}
      >
        {data.quizName}
      </chakra.a>

      <Box>Questions: 5</Box>
    </Box>
  );
}
