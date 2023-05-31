// external imports
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// internal imports
const bookRouter = require("./routes/book.route");

// creating express app
const app = express();

// security middleware implement
app.use(cors());
app.use(helmet());

// logger middleware implement
app.use(morgan("dev"));

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/books", bookRouter);

// 404 not found handler
app.use((req, res, next) => {
  next({
    message: "Your requested content was not found!",
  });
});

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send({
    message: "There was a server side error",
    error: err.message,
  });
});

module.exports = app;
