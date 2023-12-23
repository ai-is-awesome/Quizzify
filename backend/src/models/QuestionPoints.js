import mongoose, { mongo } from "mongoose";

const questionPointsSchema = mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  points: { type: Number },
});

const QuestionPoints = mongoose.model("QuestionPoints", questionPointsSchema);

export default QuestionPoints;
