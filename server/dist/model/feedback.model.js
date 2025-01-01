"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var feedbackSchema = new mongoose_1.default.Schema({
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
    feedback: {
        type: String,
        required: [true, "Feedback can't be empty!"],
    },
}, { timestamps: true });
var Feedback = mongoose_1.default.model("Feedback", feedbackSchema);
exports.default = Feedback;
//# sourceMappingURL=feedback.model.js.map