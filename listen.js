require("dotenv").config();
const { PORT = 9090 } = process.env;
const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const { Server } = require("socket.io");
const connectDB = require("./db/connect");
const options = {
  cors: true,
  origins: ["http://localhost:3000/presentations/"],
};
const io = new Server(server, options);
console.log(io);
connectDB().then(() => {
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${PORT} ....`);
  });
});

module.exports = { io };
