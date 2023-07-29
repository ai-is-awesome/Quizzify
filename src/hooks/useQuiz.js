import { useState } from "react";

export default function useQuiz(quizData) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const currentQuestionObject = quizData[currentQuestionIdx];
  const proceedToNextQuestion = () => {
    setCurrentQuestionIdx((prev) => prev + 1);
  };

  const isLastQuestion = () => {
    if (quizData.questions.length - 1 === currentQuestionIdx) {
      return true;
    }
    return false;
  };
  const isQuizFinished = false;
  return {
    currentQuestionIdx,
    proceedToNextQuestion,
    isQuizFinished,
    isLastQuestion,
    currentQuestionObject,
  };
}
