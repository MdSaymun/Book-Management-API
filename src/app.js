// external imports
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// internal imports
const bookRouter = require("./routes/book.routes");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandlers");

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
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

module.exports = app;
