require("dotenv").config();
const { PORT = 3000 } = process.env;
const app = require("./app");
const connectDB = require("./db/connect");
const options = {
  cors: true,
  origins: ["http://localhost:3000/presentations/"],
};

connectDB().then(() => {
  app.server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${PORT} ....`);
  });
});
