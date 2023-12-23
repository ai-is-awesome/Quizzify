import mongoose, { mongo } from "mongoose";

const wordSchema = mongoose.Schema({
  word: { type: String },
  origin: { type: String, enum: ["fr", "en", "hi", "ru", "ge", "du"] },
  translatedWord: { type: String },
  translatedWordOrigin: {
    type: String,
    enum: ["fr", "en", "hi", "ru", "ge", "du", "ta"],
  },
});

const Word = mongoose.model("Word", wordSchema);

export default Word;
