"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStemCells = void 0;
const title_1 = __importDefault(require("../title"));
const getStemCells = (req, res) => {
    res.render("stem cells", {
        title: title_1.default
    });
};
exports.getStemCells = getStemCells;
