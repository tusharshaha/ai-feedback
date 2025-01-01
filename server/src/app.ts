import cors from "cors";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import morgan from "morgan";

// routes
import feedbackRoute from "./routes/feedback.route";
import handleError from "./middleware/error-handler";
import { FRONTEND_URL } from "./configs";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: "GET,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));

// routes
app.use("/api/feedback", feedbackRoute);

app.all("*", (_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "No route found",
  });
});

// error handler middleare
app.use(handleError);

export default app;
