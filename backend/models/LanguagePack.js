import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  name: { type: String, required: true },
  numberOfQuestions: Number,
  language: { type: String, enum: ["fr", "de"] },
  teachingMaterials: [{ type: mongoose.Schema.Types.ObjectId, ref: "" }],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
