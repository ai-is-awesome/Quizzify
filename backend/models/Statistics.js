import mongoose from "mongoose";

const statisticsSchema = mongoose.Schema({
  pointsScored: { type: Number },
  totalScore: { type: Number },
  languagePackAttempts: { type: Number },
});

const Statistics = mongoose.Model(statisticsSchema, "Statistics");

export default Statistics;
