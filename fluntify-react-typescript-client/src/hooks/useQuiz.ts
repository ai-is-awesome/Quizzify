import { useState, useEffect } from "react";

type QuizStateType = "not initialized" | "started" | "submitting" | "submitted";

export default function useQuiz(quizData) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1);
  const [quizState, setQuizState] = useState<QuizStateType>("not initialized");

  const proceedToNextQuestion = () => {
    setCurrentQuestionIdx((prev) => prev + 1);
  };

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (quizData !== null && quizData !== undefined) {
      setQuestions(quizData.questions);
    }
  }, [quizData]);

  const isLastQuestion = () => {
    // If quizData or questions array is not available, return false
    if (!quizData || !quizData.questions || quizData.questions.length === 0) {
      return false;
    }
    const bool = currentQuestionIdx === quizData.questions.length - 1;
    console.log("BOOL : ", bool);
    return bool;
  };

  const isQuizFinished = () => {
    const isQuizFinished =
      !quizData.questions ||
      quizData.questions.length === 0 ||
      currentQuestionIdx >= quizData.questions.length;
    return isQuizFinished;
  };

  const startQuiz = () => {
    setCurrentQuestionIdx(0);
    setQuizState("started");
  };

  const currentQuestionObject = isQuizFinished
    ? null
    : quizData.questions[currentQuestionIdx];

  return {
    currentQuestionIdx,
    proceedToNextQuestion,
    isQuizFinished,
    isLastQuestion,
    currentQuestionObject,
    questions,
    quizState,
    startQuiz,
  };
}
