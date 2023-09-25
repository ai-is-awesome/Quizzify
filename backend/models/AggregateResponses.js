import mongoose, { mongo } from "mongoose";

const aggregateResponseSchema = mongoose.Schema({
  pointsScored: Number,
  totalPoints: Number,
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  responses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Response" }],
  timeSubmitted: Date,
});

const AggregateResponse = mongoose.model(
  "AggregateResponse",
  aggregateResponseSchema
);

export default AggregateResponse;
