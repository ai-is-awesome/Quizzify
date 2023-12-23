import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  name: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  numberOfQuestions: Number,
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vote" }],
  downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vote" }],
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date, default: Date.now },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  description: { type: String },
  image_url: { type: String },
  timeLimitInSeconds: { type: Number },
  isTimed: { type: Boolean, default: false },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
