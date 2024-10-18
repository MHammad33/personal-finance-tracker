import app from "./app";
import connectDB from "./db/connectDb";
import config from "./utils/config";
import logger from "./utils/logger";

const connectDbWithRetry = async (retries = 5) => {
  while (retries) {
    try {
      await connectDB(config.MONGODB_URI);
      break;
    } catch (error) {
      console.error(`Retrying... (${retries})`, error);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  if (!retries) process.exit(1);
};

const startServer = async () => {
  try {
    await connectDbWithRetry();
    app.listen(config.PORT, () =>
      logger.info("Server listening on port " + config.PORT)
    );
  } catch (error) {
    logger.error("Error connecting to server", error);
    process.exit(1);
  }
};

startServer();
