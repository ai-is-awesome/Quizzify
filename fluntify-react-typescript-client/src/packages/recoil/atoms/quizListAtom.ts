import { atom, selector } from "recoil";
import { getAllQuizzes, searchQuiz } from "../../../services";

// "idle","loading","success","error"
export const quizzesAtom = atom({
  key: "quizList", // unique ID (with respect to other atoms/selectors)
  default: { loadingStatus: "idle", data: [] }, // default value (aka initial value)
});

export const searchQueryAtom = atom({
  key: "quizSearchAtom",
  default: "",
});

export const quizSelector = selector({
  key: "quizSelector",
  get: async ({ get }) => {
    const query = get(searchQueryAtom);
    if (query === "") {
      return getAllQuizzes().then((res) => {
        return res.data;
      });
    } else {
      return searchQuiz(query).then((res) => {
        return res.data;
      });
    }
  },
});

export const quizAtom = atom({
  key: "quizAtom",
  default: quizSelector,
});
