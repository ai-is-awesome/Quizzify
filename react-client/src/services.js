import axios from "axios";

export const BASE_URL = "http://18.134.229.52:3001/";
export const TRANSLATION_API_URL = BASE_URL + "translate";
export const RANDOM_WORD_API_URL = BASE_URL + "get_random_word_of_the_day";
const getQuizByIdURL = BASE_URL + "get_quiz_by_id";

export const getQuizById = async (quizId) => {
  const data = await axios.post(getQuizByIdURL, { quizId: quizId });
  console.log(data);
  return data;
};
