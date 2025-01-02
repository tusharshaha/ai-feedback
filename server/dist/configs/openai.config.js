"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openai_1 = require("openai");
var _1 = require(".");
var openai = new openai_1.OpenAI({
    apiKey: _1.OPENAI_API_KEY,
});
exports.default = openai;
//# sourceMappingURL=openai.config.js.map