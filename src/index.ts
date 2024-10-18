import app from "./app";
import connectDB from "./db/connectDb";
import config from "./utils/config";
import logger from "./utils/logger";

const startServer = async () => {
  try {
    await connectDB(config.MONGODB_URI);
    app.listen(config.PORT, () =>
      logger.info("Server listening on port " + config.PORT)
    );
  } catch (error) {
    logger.error("Error connecting to server", error);
    process.exit(1);
  }
};

startServer();
