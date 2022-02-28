const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const http = require("http");
app.server = http.createServer(app);

const options = {
  cors: true,
  origins: ["http://localhost:3000/presentations/"],
};
io = require("socket.io")(app.server, options);
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

  socket.on('student_login', (data) => {
    console.log(data)
    // socket.to(data).emit('receive_message', data)
    io.emit('current_slide', 'slide_id_123')
  })

  socket.on('test', (data) => {
    console.log(data, '<<from student fe')
  })

  socket.on("current_session", (data) => {
    console.log(data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

module.exports = app;