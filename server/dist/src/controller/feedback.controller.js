"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFeedback = getAllFeedback;
exports.getFeedback = getFeedback;
var types_1 = require("../types");
var feedback_service_1 = require("../services/feedback.service");
var feedback_model_1 = __importDefault(require("../../model/feedback.model"));
function getAllFeedback(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, limit, skip, data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.query, limit = _a.limit, skip = _a.skip;
                    return [4 /*yield*/, feedback_model_1.default.find({})
                            .skip(parseInt(skip))
                            .limit(parseInt(limit))];
                case 1:
                    data = _b.sent();
                    res.status(200).json({
                        success: true,
                        data: data,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    next(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getFeedback(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var feedback, isValidBody, aiFeedback, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    feedback = req.body;
                    isValidBody = types_1.feedbackSchema.safeParse(feedback);
                    if (!isValidBody.success) {
                        res.status(400).json({
                            success: false,
                            message: "Provided feedback data is invalid.",
                            error: isValidBody.error,
                        });
                        return [2 /*return*/];
                    }
                    if (!(feedback.type === "bug")) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, feedback_service_1.getAIFeedback)(feedback)];
                case 1:
                    aiFeedback = _a.sent();
                    data = __assign(__assign({}, feedback), { feedback: aiFeedback });
                    return [4 /*yield*/, feedback_model_1.default.create(data)];
                case 2:
                    _a.sent();
                    res.status(200).json({
                        success: true,
                        message: "Feedback submitted successfully",
                        data: data,
                    });
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, feedback_model_1.default.create(feedback)];
                case 4:
                    _a.sent();
                    res.status(200).json({
                        success: true,
                        message: "Feedback submitted successfully",
                    });
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    next(error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=feedback.controller.js.map