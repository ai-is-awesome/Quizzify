import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  statistics: { type: mongoose.Schema.Types.ObjectId, ref: "Statistics" },
  hash: String,
  languagePacks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "LanguagePack" },
  ],
});

const model = mongoose.Model(userSchema, "User");

export default model;
