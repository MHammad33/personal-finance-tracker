import mongoose from "mongoose";
import logger from "../utils/logger";

interface MongoError extends Error {
  code?: string;
  errno?: number;
  syscall?: string;
  hostname?: string;
}

const getErrorMessage = (error: MongoError): string => {
  if (error.code === "ETIMEOUT") {
    return "Database connection failed: Network timeout. Please check your internet connection and try again.";
  }

  if (error.code === "ENOTFOUND") {
    return "Database connection failed: Could not resolve database hostname. Please check your connection string.";
  }

  if (error.message?.includes("authentication failed")) {
    return "Database connection failed: Invalid credentials. Please check your username and password.";
  }

  return `Database connection failed: ${error.message || "Unknown error"}`;
};

const connectDB = async (mongoUri?: string): Promise<void> => {
  try {
    if (!mongoUri) {
      throw new Error("MongoDB URI is required");
    }

    const connection = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000, // Increased timeout
      socketTimeoutMS: 45000
    });

    logger.info("Connected to Database", connection.connection.name);
  } catch (error) {
    const errorMessage = getErrorMessage(error as MongoError);
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }
};

export const connectDbWithRetry = async (uri: string): Promise<void> => {
  let attempts = 0;
  const maxAttempts = 2; // Original attempt + 1 retry

  while (attempts < maxAttempts) {
    try {
      await connectDB(uri);
      return; // Success, exit function
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
        throw error; // Re-throw the error after final attempt
      }
    }
  }
};

export default connectDB;
