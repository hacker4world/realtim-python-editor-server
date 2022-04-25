"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var axios_1 = __importDefault(require("axios"));
exports.router = (0, express_1.Router)();
exports.router.post("/run", function (req, res) {
    var options = {
        script: req.body.code,
        language: "python3",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    };
    axios_1.default.post(process.env.API_URL, options).then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
    });
});
