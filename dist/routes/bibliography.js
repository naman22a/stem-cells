"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bibliography_1 = require("../controllers/bibliography");
const router = express_1.default.Router();
router.get('/', bibliography_1.getBibliography);
exports.default = router;
