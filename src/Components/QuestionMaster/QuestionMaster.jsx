import React from "react";
import RadioQuestion from "../RadioQuestion";
import useQuiz from "../../hooks/useQuiz";

export default function QuestionMaster(props) {
  const { currentQuestionIdx, proceedToNextQuestion } = useQuiz();
  const questionObject = props.questionObject;
  const questionType = questionObject.questionType;
  const questionText = questionObject.questionText;
  const choices = questionObject.choices;

  console.log(choices);

  if (questionType === "radio") {
    return <RadioQuestion questionText={questionText} choices={choices} />;
  }

  return <div>QuestionMaster</div>;
}
