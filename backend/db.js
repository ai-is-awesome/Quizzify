import "dotenv/config";

import mongoose from "mongoose";
const connectToDb = async () => {
  mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("Connected to db");
  });
};

export default connectToDb;
