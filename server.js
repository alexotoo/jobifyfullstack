import app from "./app.js";
import { createServer } from "http";
import mongoose from "mongoose";
import "dotenv/config";

const PORT = process.env.PORT || 8000;
const server = createServer(app);

mongoose.connection.once("open", () => {
  console.log("DB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function startServerWithDataConnection() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    server.listen(PORT, () =>
      console.log(`server listening on port: ${PORT}...`)
    );
  } catch (error) {
    console.log("server didn't start", error);
  }
}
startServerWithDataConnection();
