import mongoose, { mongo } from "mongoose";

const questionSchema = mongoose.Schema({
  questionText: String,
  questionType: { type: String },
  choices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Choice" }],
  category: String,
  correctChoiceId: { type: mongoose.Schema.Types.ObjectId, ref: "Choice" },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
