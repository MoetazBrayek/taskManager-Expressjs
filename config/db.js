import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// create a database connection
export const connect = (url =process.env.MONGODB , opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true })
    .then(() => console.log("Connected to database"))
    .catch(error => console.log(`Error connecting to database: ${error}`));
};
