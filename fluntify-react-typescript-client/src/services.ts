import axios from "axios";
import { onboardUserPayload } from "./shared/types";

export const DEPLOY_URL = "https://fluentify-pearl.vercel.app/";
export const LOCAL_SERVER_URL = "http://localhost:3001/";
// export const LOCAL_SERVER_URL = DEPLOY_URL;
export const BASE_URL =
  import.meta.env.VITE_DEV_MODE === "local" ? LOCAL_SERVER_URL : DEPLOY_URL;

export const TRANSLATION_API_URL = BASE_URL + "translate";
export const RANDOM_WORD_API_URL = BASE_URL + "get_random_word_of_the_day";
const getQuizByIdURL = BASE_URL + "get_quiz_by_id";
const USER_DATA_URL = BASE_URL + "get_user_data";
const ONBOARD_SERVICE_URL = BASE_URL + "onboard_user";

export const getQuizById = async (quizId: string) => {
  const data = await axios.post(getQuizByIdURL, { quizId: quizId });
  console.log(data);
  return data;
};

export const getUserData = (token: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(USER_DATA_URL, { token: token })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const onboardUserService: (payload: onboardUserPayload) => void = async (
  payload
) => {
  const resp = await axios.post(ONBOARD_SERVICE_URL, payload);
  return resp;
};

export const getAllQuizzes = async () => {
  const data = await axios.get(BASE_URL + "get_all_quiz");
  return data;
};

export const searchQuiz = async (searchQuery: string) => {
  const data = await axios.post(BASE_URL + "search_quiz", {
    quizName: searchQuery,
  });
  return data;
};
