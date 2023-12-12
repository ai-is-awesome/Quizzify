import { useState, useEffect } from "react";

export default function useQuiz(quizData) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

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
  };
}
