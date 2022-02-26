const { PORT = 9090 } = process.env;
const server = require("./app.js");

server.listen(PORT, (err) => {
  if (err) throw err;
  try {
    await connectDB(process.env.MONGO_URI);
    //app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
  console.log(`Server listening on port ${PORT} ....`);
});
