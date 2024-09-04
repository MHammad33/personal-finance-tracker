import mongoose from "mongoose";
import logger from "../utils/logger";

const connectDB = async (mongoUri?: string) => {
  try {
    const connection = await mongoose.connect(mongoUri || "");
    logger.info("Connected to Database", connection.connection.name);
  } catch (error) {
    console.log("Error connecting to Database", error);
  }
};

export default connectDB;
