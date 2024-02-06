import mongoose from "mongoose";

const quizResponseSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  responseId: { type: mongoose.Schema.Types.ObjectId, ref: "Response" },
  questionResponses: [
    { type: mongoose.Schema.Types.ObjectId, ref: "QuestionResponse" },
  ],
});

const QuizResponse = mongoose.model("QuizResponse", quizResponseSchema);

export default QuizResponse;
