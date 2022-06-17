import { readFile } from "fs/promises";
import "dotenv/config";
import Job from "./models/job.js";

import mongoose from "mongoose";

mongoose.connection.once("open", () => {
  console.log("DB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Job.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("./my_MOCK_DATA.json", import.meta.url))
    );
    await Job.create(jsonProducts);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
