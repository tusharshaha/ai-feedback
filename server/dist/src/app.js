"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
// routes
var feedback_route_1 = __importDefault(require("./routes/feedback.route"));
var error_handler_1 = __importDefault(require("./middleware/error-handler"));
var configs_1 = require("./configs");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: configs_1.FRONTEND_URL,
    methods: "GET,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
// routes
app.use("/api/feedback", feedback_route_1.default);
app.all("*", function (_req, res) {
    res.status(404).json({
        success: false,
        message: "No route found",
    });
});
// error handler middleare
app.use(error_handler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map