const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const server = require("http").createServer(app);
const home = require("./routes/home");
const apiInfo = require("./routes/apiInfo");
const presentations = require("./routes/presentations");

const {
  handleInvalidUrlErrors,
  handleCustomErrors,
  handleServerErrors,
} = require("./error-handler/error");

app.use(express.json());

app.use("/", home);
app.use("/api", apiInfo);
app.use("/api/presentations", presentations);

app.all("*", handleInvalidUrlErrors);
app.use(handleCustomErrors);
app.use(handleServerErrors);

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("current_session", (data) => {
    console.log(data);
    //socket.to(student).emit('receive_message', data)
    //io.emit('receive_message', data)  // this need to emit to student portal
  });

  // when someone leaves the chat room
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

module.exports = app;
