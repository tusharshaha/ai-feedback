import { Router } from "express";
import {
  deleteOneFeedback,
  getAllFeedback,
  getFeedback,
} from "../controller/feedback.controller";

const router = Router();

router.route("/").get(getAllFeedback).post(getFeedback);
router.delete("/:id", deleteOneFeedback);

export default router;
