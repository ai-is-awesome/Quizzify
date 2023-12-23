import "dotenv/config";

import mongoose from "mongoose";
const connectToDb = async () => {
  try {
    console.log("ENV: ", process.env.MONGO_DB_URL);
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB Connected");
  } catch (e) {
    console.error("Unable to connect to the DB", e.message);
  }
};

export default connectToDb;
