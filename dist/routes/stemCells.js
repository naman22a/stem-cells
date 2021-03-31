"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stemCells_1 = require("../controllers/stemCells");
const router = express_1.default.Router();
router.get('/', stemCells_1.getStemCells);
exports.default = router;
