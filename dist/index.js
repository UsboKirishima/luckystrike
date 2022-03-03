"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = exports.error = void 0;
const error_1 = require("./lib/error");
Object.defineProperty(exports, "error", { enumerable: true, get: function () { return error_1.error; } });
const warn_1 = require("./lib/warn");
Object.defineProperty(exports, "warn", { enumerable: true, get: function () { return warn_1.warn; } });
