import app from "./app";
import { connectDbWithRetry } from "./db/connectDb";
import config from "./utils/config";
import logger from "./utils/logger";

const startServer = async () => {
  try {
    await connectDbWithRetry(config.MONGODB_URI);
    await new Promise<void>(resolve => {
      app.listen(config.PORT, resolve);
    });
    logger.info("Server listening on port " + config.PORT);
  } catch (error) {
    logger.error("Error connecting to server", error);
    process.exit(1);
  }
};

startServer();
