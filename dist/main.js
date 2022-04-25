"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var editor_router_1 = require("./router/editor.router");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/", editor_router_1.router);
var server = http_1.default.createServer(app);
server.listen(process.env.PORT, function () {
    console.log("Server started on port " + process.env.PORT);
});
var io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
    },
});
io.on("connection", function (socket) {
    console.log("connected");
    socket.on("code", function (code) {
        io.emit("code", code);
    });
});
