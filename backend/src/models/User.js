import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  firebaseUID: { type: String },
  preferredLanguages: [{ type: String }],

  isOnboarded: Boolean,
});

const User = mongoose.model("User", userSchema);

export default User;
