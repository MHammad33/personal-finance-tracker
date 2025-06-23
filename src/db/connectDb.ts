import mongoose from "mongoose";
import logger from "../utils/logger";

const connectDB = async (mongoUri?: string) => {
  try {
    const connection = await mongoose.connect(mongoUri || "", {
      serverSelectionTimeoutMS: 5000
    });
    logger.info("Connected to Database", connection.connection.name);
  } catch (error) {
    console.log("Error connecting to Database", error);
  }
};

export const connectDbWithRetry = async (uri: string, retries = 5) => {
  while (retries) {
    try {
      await connectDB(uri);
      break;
    } catch (error) {
      console.error(`Retrying... (${retries})`, error);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  if (!retries) process.exit(1);
};

export default connectDB;
