const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDb = require("./config/db");
connectToDb();

const userRouter = require("./routes/userRoutes");

app.use("/", userRouter);

module.exports = app;
