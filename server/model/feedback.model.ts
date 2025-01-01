import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["bug", "idea", "other"],
      required: [true, "Type is Required"],
    },
    status: {
      type: String,
      enum: ["pending", "solved"],
      default: "pending"
    },
    subject: {
      type: String,
      required: [true, "Subject can't be empty!"],
    },
    feedback: String,
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
