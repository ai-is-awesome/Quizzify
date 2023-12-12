import axios from "axios";

export const BASE_URL = "https://fluentify-node-js.onrender.com/";
export const TRANSLATION_API_URL = BASE_URL + "translate";
export const RANDOM_WORD_API_URL = BASE_URL + "get_random_word_of_the_day";
const getQuizByIdURL = BASE_URL + "get_quiz_by_id";
const getUserDataURL = BASE_URL + "get_user_data";

export const getQuizById = async (quizId) => {
  const data = await axios.post(getQuizByIdURL, { quizId: quizId });
  console.log(data);
  return data;
};

export const getUserData = (token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(getUserDataURL, { firebaseUID: token })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
