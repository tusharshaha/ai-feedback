import { Router } from "express";
import { getFeedback } from "../controller/feedback.controller";

const router = Router();

router.route("/").post(getFeedback);

export default router;
