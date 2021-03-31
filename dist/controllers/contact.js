"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postContact = exports.getContact = void 0;
const title_1 = __importDefault(require("../title"));
const contacts_1 = __importDefault(require("../models/contacts"));
const getContact = (req, res) => {
    res.render("contact", {
        title: title_1.default
    });
};
exports.getContact = getContact;
const postContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = new contacts_1.default({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        const send = yield contact.save();
        res.status(201).render('index');
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error).render('index');
    }
});
exports.postContact = postContact;
