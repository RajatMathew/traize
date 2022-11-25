var io = require("socket.io-client");
var socket = io.connect("http://localhost:3000", { reconnect: true });

const express = require("express");
const app = express();

var http = require("http").Server(app);
var io = require("socket.io")(http);

socket.on("message", function (data, json) {
   console.log(data, json);
});
