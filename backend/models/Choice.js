import mongoose, { mongo } from "mongoose";

const choiceSchema = mongoose.Schema({
  choiceText: String,
});

const Choice = mongoose.model("Choice", choiceSchema);

export default Choice;
