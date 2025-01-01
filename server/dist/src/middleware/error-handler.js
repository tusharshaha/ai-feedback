"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleError;
function handleError(error, _req, res, _next) {
    var validationErrors = "";
    if (error.name === "ValidationError") {
        for (var field in error.errors) {
            if (error.errors.hasOwnProperty(field)) {
                validationErrors = error.errors[field].message;
            }
        }
    }
    if (error.message.includes("E11000 duplicate")) {
        validationErrors = "Email already exists please login.";
    }
    res.status(500).json({
        success: false,
        message: validationErrors || error.message,
    });
}
//# sourceMappingURL=error-handler.js.map