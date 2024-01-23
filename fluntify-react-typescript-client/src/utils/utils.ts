export const constructQuestionObject = ({
  questionType,
  questionText,
  _id: string,
  ...questionObject
}) => {
  return { questionType, questionText };
};
