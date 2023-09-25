import "dotenv/config";

import mongoose from "mongoose";
const connectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL).then(() => {
      console.log("Connected to db");
    });
  } catch (e) {
    console.log("Unable to connect to the DB");
  }
};

export default connectToDb;
