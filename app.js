// require("./db/connect");
// const express = require("express");
// const app = express();
// const results = require("./routes/results");
// const connectDB = require("./db/connect");
// require("dotenv").config();

// //middleware
// //app.use(express.static("./public"));
// app.use(express.json());
// /*
// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
// */
// app.use("/api/results", results);
// let PORT = 3000;
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(PORT);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
// console.log("GO");

// /*var express = require('express');
// var app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const port = process.env.PORT || 3000;
// //var mongoose = require('mongoose');
// //var config = require('./config');
// //mongoose.connect(config.db);

// var path = require('path');
// app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// //const arr = []
// io.on('connection', (socket) => {
//     // console.log(`User connected ${socket.id} - connection in server`);

//     socket.on('chat message', msg => {
//         console.log(msg, `<message got in server from ${socket.id}`)
//         // io.emit('chat message', msg);
//     });
//     socket.on("disconnect", () => {
//         console.log("user disconnected", socket.id)
//     })
// });

// http.listen(port, () => {
//     console.log(`Socket.IO server running at http://localhost:${port}/`);
// });
// */


require("./db/connect");
const express = require("express");
const app = express();
const results = require("./routes/results");
const connectDB = require("./db/connect");
require("dotenv").config();


//RG
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// const server = require('http').createServer(app)
// const io = require('socket.io')(server)
//

// // //middleware
// app.use(express.static("./public"));
// app.use(express.json());
// // /*
// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
// // */

var path = require('path');
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use("/api/results", results);
//let PORT = 3000;
const start = async () => {
  console.log(port);

  try {
    await connectDB(process.env.MONGO_URI);
    // app.listen(PORT);
    app.listen(port);
  } catch (error) {
    console.log("error");
  }
};
start();
console.log("GO");

io.on('connection', (socket) => {
  // console.log(`User connected ${socket.id} - connection in server`);

  socket.on('chat message', msg => {
    console.log(msg);
    console.log(msg.username, `<message got in server from ${socket.id}`)
    // io.emit('chat message', msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id)
  })
});

// http.listen(port, () => {
//   console.log(`Socket.IO server running at http://localhost:${port}/`);
// });

// /*var express = require('express');
// var app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const port = process.env.PORT || 3000;
// //var mongoose = require('mongoose');
// //var config = require('./config');
// //mongoose.connect(config.db);

// var path = require('path');
// app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// //const arr = []
// io.on('connection', (socket) => {
//     // console.log(`User connected ${socket.id} - connection in server`);

//     socket.on('chat message', msg => {
//         console.log(msg, `<message got in server from ${socket.id}`)
//         // io.emit('chat message', msg);
//     });
//     socket.on("disconnect", () => {
//         console.log("user disconnected", socket.id)
//     })
// });

// http.listen(port, () => {
//     console.log(`Socket.IO server running at http://localhost:${port}/`);
// });
// */
