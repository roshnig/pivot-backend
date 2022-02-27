require("./db/connect");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//trying
const server = require('http').createServer(app);
const options = {
  cors: true,
  origins: ['http://localhost:3000/presentations/'],
};
const io = require('socket.io')(server, options);

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('current_session', (data) => {
    console.log(data)
    //socket.to(student).emit('receive_message', data) 
    //io.emit('receive_message', data)  // this need to emit to student portal
  })

  // when someone leaves the chat room
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id)
  })
});
server.listen(3002, () => {
  console.log('listening on *: http://localhost:3002');
});
//////

const home = require("./routes/home");
const apiInfo = require("./routes/apiInfo");
const results = require("./routes/results");

const connectDB = require("./db/connect");

require("dotenv").config();

const { handleInvalidUrlErrors, handleCustomErrors, handleServerErrors } = require("./error-handler/error");

app.use(express.json());

app.use("/", home);
app.use("/api", apiInfo);
app.use("/api/results", results);

app.all("*", handleInvalidUrlErrors);
app.use(handleCustomErrors);
app.use(handleServerErrors);

let PORT = process.env.PORT || 3001;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
};
start();
module.exports = app;
