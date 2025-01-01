import mongoose from "mongoose";
import app from "./app";
import { DB_URI, PORT } from "./configs";

const server = async () => {
  try {
    await mongoose.connect(DB_URI);
    app.listen(PORT, () => {
      console.log(`[server] is running on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

server()