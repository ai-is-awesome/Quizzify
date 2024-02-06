import mongoose from "mongoose";

const questionResponseSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  selectedChoices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Choice" }],
  isCorrect: boolean,
  points: Number,
});

const QuestionResponse = mongoose.model(
  "QuestionResponse",
  questionResponseSchema
);

export default QuestionResponse;
