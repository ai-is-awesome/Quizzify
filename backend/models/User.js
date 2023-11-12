import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  statistics: { type: mongoose.Schema.Types.ObjectId, ref: "Statistics" },
  hash: String,
  preferredLanguages: [{ type: String }],
  languagePacks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "LanguagePack" },
  ],
  isOnboarded: Boolean,
});

const model = mongoose.Model(userSchema, "User");

export default model;
