import mongoose, { mongo } from "mongoose";

const responseSchema = mongoose.Schema({
  isCorrect: boolean,
  selectedChoices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Choice" }],
  points: Number,
  totalPoints: Number,
});

const Response = mongoose.model("Response", responseSchema);

export default Response;
