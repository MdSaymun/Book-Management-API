// 404 not found handler
const notFoundHandler = (req, res, next) => {
  next({
    message: "Your requested content was not found!",
  });
};

// custom error handler
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "" : error.stack,
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
