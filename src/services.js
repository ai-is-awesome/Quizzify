import axios from "axios";

const BASE_URL = "http://localhost:3001/";
const getQuizByIdURL = BASE_URL + "get_quiz_by_id";

export const getQuizById = async (quizId) => {
  const data = await axios.post(getQuizByIdURL, { quizId: quizId });
  console.log(data);
  return data;
};
