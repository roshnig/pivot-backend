var express = require('express');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
//var mongoose = require('mongoose');
//var config = require('./config');
//mongoose.connect(config.db);

var path = require('path');
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//const arr = []
io.on('connection', (socket) => {
    // console.log(`User connected ${socket.id} - connection in server`);

    socket.on('chat message', msg => {
        console.log(msg, `<message got in server from ${socket.id}`)
        // io.emit('chat message', msg);
    });
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
    })
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});



// const express = require("express")
// const app = express();
// const http = require('http');
// const cors = require('cors');
// app.use(cors());

// const server = http.createServer(app);
// const { Server } = require("socket.io");

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// });

// app.get('/', (req, res) => {
//     res.send('Its working from server')
// });

// io.on('connection', (socket) => {
//     console.log(`User connected ${socket.id}`);


//     socket.on("disconnect", () => {
//         console.log("user disconnected", socket.id)
//     })
// });

// const { PORT = 9090 } = process.env;

// server.listen(PORT, (err) => {
//     if (err) throw err;
//     console.log(`Server listening on port ${PORT} ....`);
// })

// module.exports = server;

