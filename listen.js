const { PORT = 9090 } = process.env;
const server = require('./app.js')

server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${PORT} ....`);
})