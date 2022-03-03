"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
const colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
function getTime() {
    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    return `${hour}:${minute}:${second}`.magenta;
}
exports.getTime = getTime;
