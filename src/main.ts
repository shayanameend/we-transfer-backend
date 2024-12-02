import { createServer } from "node:http";

import express from "express";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);

const io = new Server(server);

io.on("connection", () => {
	console.log("Connected!");
});

server.listen(() => {
	console.log("Server is Listening!");
});
