// const express = require("express");
// const app = express();

// var http = require("http").Server(app);
// var io = require("socket.io")(http);

var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const { ReadlineParser } = require("@serialport/parser-readline");
const { SerialPort } = require("serialport");

const port = new SerialPort({
   path: "COM3",
   baudRate: 9600,
});

let datax;

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

parser.on("data", (data) => {
   datax = data.toString();
   io.emit("data", function () {
      io.send("data", datax);
   });
});

http.listen(3000, function () {
   console.log("listening on *:3000");
});
