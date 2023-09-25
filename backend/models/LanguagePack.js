import mongoose from "mongoose";

const languagePackSchema = mongoose.Schema({
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  name: { type: String, required: true },
  numberOfQuestions: Number,
  language: { type: String, enum: ["fr", "de"] },
  teachingMaterials: [{ type: mongoose.Schema.Types.ObjectId, ref: "" }],
});

const LanguagePack = mongoose.model("Quiz", languagePackSchema);

export default LanguagePack;
