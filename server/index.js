const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { MONGO_URL, PORT } = process.env;

require("dotenv").config();

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server on port http://localhost:${PORT}/`);
});

app.use(
  cors({
    origin: [`http://localhost:${POST}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(express.json());