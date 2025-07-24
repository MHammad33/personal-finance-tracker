import { MongoError } from "mongodb";

export const getDbErrorMessage = (error: MongoError): string => {
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
