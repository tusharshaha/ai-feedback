import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["bug", "idea", "other"],
      required: [true, "Type is Required"],
    },
    subject: {
      type: String,
      required: [true, "Subject can't be empty!"],
    },
    feedback: {
      type: String,
      required: [true, "Feedback can't be empty!"],
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
