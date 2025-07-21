import mongoose from "mongoose";
import logger from "../utils/logger";
import { getDbErrorMessage } from "../utils/dbErrorHandler";
import { MongoError } from "mongodb"; // Add this import

const connectDB = async (mongoUri?: string): Promise<void> => {
  try {
    if (!mongoUri) {
      throw new Error("MongoDB URI is required");
    }

    const connection = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 15000 // Reduced from 45s → 15s
    });

    logger.info("Connected to Database", connection.connection.name);
  } catch (error) {
    const errorMessage = getDbErrorMessage(error as MongoError);
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }
};

export const connectDbWithRetry = async (uri: string): Promise<void> => {
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      await connectDB(uri);
      return;
    } catch (error) {
      attempts++;
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";

      if (attempts < maxAttempts) {
        logger.error(`Connection attempt ${attempts} failed`);
        logger.info("Retrying connection in 3 seconds...");
        await new Promise(res => setTimeout(res, 3000));
      } else {
        logger.error(`Final connection attempt failed: ${errorMessage}`);
        throw error;
      }
    }
  }
};

export default connectDB;
