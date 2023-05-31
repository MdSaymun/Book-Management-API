const Book = require("../models/book.model");

const createBook = async (req, res) => {
  try {
    const data = req.body;
    const book = new Book(data);
    await book.save();
    res.status(200).send({
      message: "Book Create Successful",
      data: book,
    });
  } catch (error) {
    res.status(500).send({
      message: "There was a server side error",
    });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ _id: -1 }).limit(100);
    res.status(200).send({
      data: books,
    });
  } catch (error) {
    res.status(500).send({
      message: "There was a server side error",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(
      { _id: id },
      {
        __v: 0,
      }
    );
    if (!book) {
      return res.status(400).send({
        message: "Book not found!",
      });
    }
    res.status(200).send({
      data: book,
    });
  } catch (error) {
    res.status(500).send({
      message: "There was a server side error",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send({
      message: "Book Update Successful",
      data: book,
    });
  } catch (error) {
    res.status(500).send({
      message: "There was a server side error",
    });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const isDeleted = await Book.findByIdAndDelete({ _id: id });
    if (!isDeleted) {
      return res.status(400).send({
        message: "Book not found!",
      });
    }
    res.status(200).send({
      message: "Book Delete Successful",
    });
  } catch (error) {
    res.status(500).send({
      message: "There was a server side error",
    });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBookById,
};
