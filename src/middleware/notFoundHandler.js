const notFoundHandler = (req, res) => {
  next({
    message: "Your requested content was not found!",
  });
};

module.exports = {
  notFoundHandler,
};
