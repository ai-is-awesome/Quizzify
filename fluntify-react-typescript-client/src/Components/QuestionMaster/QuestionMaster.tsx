import React from "react";
import RadioQuestion from "../RadioQuestion";

export default function QuestionMaster(props) {
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
