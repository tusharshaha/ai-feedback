import { Router } from "express";
import { getAllFeedback, getFeedback } from "../controller/feedback.controller";

const router = Router();

router.route("/").get(getAllFeedback).post(getFeedback);

export default router;
