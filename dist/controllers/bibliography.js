"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBibliography = void 0;
const title_1 = __importDefault(require("../title"));
const getBibliography = (req, res) => {
    res.render("bibliography", {
        title: title_1.default
    });
};
exports.getBibliography = getBibliography;
