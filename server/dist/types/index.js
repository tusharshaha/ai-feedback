"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackSchema = void 0;
var zod_1 = require("zod");
exports.feedbackSchema = zod_1.z.object({
    type: zod_1.z.enum(["bug", "idea", "other"]),
    subject: zod_1.z
        .string()
        .min(10, {
        message: "Subject must be at least 10 characters.",
    })
        .max(200, {
        message: "Subject must not be longer than 200 characters.",
    }),
    feedback: zod_1.z
        .string()
        .min(20, {
        message: "Feedback must be at least 20 characters.",
    })
        .max(500, {
        message: "Feedback must not be longer than 500 characters.",
    }),
});
//# sourceMappingURL=index.js.map