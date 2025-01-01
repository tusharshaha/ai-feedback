"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRONTEND_URL = exports.OPENAI_API_KEY = exports.DB_URI = exports.PORT = void 0;
require("dotenv/config");
var zod_1 = require("zod");
var envSchema = zod_1.z.object({
    PORT: zod_1.z.string(),
    DB_URI: zod_1.z.string().url(),
    OPENAI_API_KEY: zod_1.z.string(),
    FRONTEND_URL: zod_1.z.string().url(),
});
exports.PORT = (_a = envSchema.parse(process.env), _a.PORT), exports.DB_URI = _a.DB_URI, exports.OPENAI_API_KEY = _a.OPENAI_API_KEY, exports.FRONTEND_URL = _a.FRONTEND_URL;
//# sourceMappingURL=index.js.map