"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var feedback_controller_1 = require("../controller/feedback.controller");
var router = (0, express_1.Router)();
router.route("/").get(feedback_controller_1.getAllFeedback).post(feedback_controller_1.getFeedback);
router.delete("/:id", feedback_controller_1.deleteOneFeedback);
exports.default = router;
//# sourceMappingURL=feedback.route.js.map