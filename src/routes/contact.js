"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controllers/contact");
const router = express_1.default.Router();
router.get('/', contact_1.getContact);
router.post('/', contact_1.postContact);
exports.default = router;
