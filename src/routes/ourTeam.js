"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ourTeam_1 = require("../controllers/ourTeam");
const router = express_1.default.Router();
router.get('/', ourTeam_1.getOurTeam);
exports.default = router;
