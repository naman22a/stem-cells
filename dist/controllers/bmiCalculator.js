"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBmiCalculator = void 0;
const title_1 = __importDefault(require("../title"));
const getBmiCalculator = (req, res) => {
    res.render("bmi calculator", {
        title: title_1.default
    });
};
exports.getBmiCalculator = getBmiCalculator;
