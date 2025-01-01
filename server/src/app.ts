import cors from "cors";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import morgan from "morgan";

// routes


const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// routes


app.all("*", (_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "No route found",
  });
});

// error handler middleare 

export default app;