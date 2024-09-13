import app from "./app";
import connectDB from "./db/connectDb";
import config from "./utils/config";

const startServer = async () => {
  try {
    await connectDB(config.MONGODB_URI);
    app.listen(config.PORT, () =>
      console.log("Server listening on port " + config.PORT)
    );
  } catch (error) {
    console.log("Error connecting to server", error);
  }
};

startServer();
