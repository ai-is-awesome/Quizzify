export const constructQuestionObject = ({
  questionType,
  questionText
  _id,
  ...questionObject
}) => {
  return { questionType, questionText };
};
