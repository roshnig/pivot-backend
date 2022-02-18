const express = require("express")
const app = express();
const http = require('http');
const cors = require('cors');
app.use(cors());

// const server = http.createServer(app);
// const { Server } = require("socket.io");

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// });

app.get('/', (req, res) => {
    res.send('Its working from server')
});

// io.on('connection', (socket) => {
//     console.log(`User connected ${socket.id}`);


//     socket.on("disconnect", () => {
//         console.log("user disconnected", socket.id)
//     })
// });

const { PORT = 9090 } = process.env;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${PORT} ....`);
})

//module.exports = server;
