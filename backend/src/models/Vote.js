import mongoose from "mongoose";

const voteSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;
