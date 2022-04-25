import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { router } from "./router/editor.router";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "*"
  },
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("code", (code: string) => {
    io.emit("code", code);
  });
});
