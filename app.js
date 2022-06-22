import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobsRoutes.js";
import authUser from "./middleware/auth.js";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());

//routes

//Middleware
const __dirname = dirname(fileURLToPath(import.meta.url));

// app.get("/api/v1", (req, res) => {
//   res.json({ msg: "hello there API" });
// });

// app.use("/_next", express.static(path.join(__dirname, "../out")));
//app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authUser, jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../out"));
// });
export default app;
