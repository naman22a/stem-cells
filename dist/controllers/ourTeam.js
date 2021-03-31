"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOurTeam = void 0;
const title_1 = __importDefault(require("../title"));
const getOurTeam = (req, res) => {
    res.render("our team", {
        title: title_1.default
    });
};
exports.getOurTeam = getOurTeam;
