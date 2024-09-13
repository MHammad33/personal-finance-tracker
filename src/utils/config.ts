import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "secret";
const JWT_SECRET_LIFETIME = process.env.JWT_SECRET_LIFETIME || "1d";

export default {
  PORT,
  MONGODB_URI,
  JWT_SECRET_KEY,
  JWT_SECRET_LIFETIME
};
