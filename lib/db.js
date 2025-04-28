// NEED TO INSTALL 'npm install mongoose'
import mongoose from "mongoose";

// NEED TO INSTALL 'npm install dotenv'
import dotenv from "dotenv";
dotenv.config();

const db_con = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default db_con;
