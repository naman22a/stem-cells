"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bmiCalculator_1 = require("../controllers/bmiCalculator");
const router = express_1.default.Router();
router.get('/', bmiCalculator_1.getBmiCalculator);
exports.default = router;
