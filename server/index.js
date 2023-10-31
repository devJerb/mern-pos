const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const auth = require('./routes/auth');

const PORT = process.env.PORT || 8080;

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
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
    origin: [`http://localhost:${PORT}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json());

app.use('/', auth);