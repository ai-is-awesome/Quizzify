import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  statistics: { type: mongoose.Schema.Types.ObjectId, ref: "Statistics" },
  firebaseUID: {},
  preferredLanguages: [{ type: String }],
  languagePacks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "LanguagePack" },
  ],
  isOnboarded: Boolean,
});

const User = mongoose.model("User", userSchema);

export default User;
