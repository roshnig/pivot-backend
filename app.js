var express = require("express");
var app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;
//var mongoose = require('mongoose');
//var config = require('./config');
//mongoose.connect(config.db);

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//const arr = []
io.on("connection", (socket) => {

  socket.on("submit answer", (data) => {
    console.log(data.answer, data.username, `<< answer got in server from ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
