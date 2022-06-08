import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobsRoutes.js";
import authUser from "./middleware/auth.js";

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());

//routes

//Middleware

app.get("/api/v1", (req, res) => {
  res.json({ msg: "hello there API" });
});
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome-job-search</h1>");
// });
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authUser, jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
export default app;
