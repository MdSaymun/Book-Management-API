const Book = require("../models/book.model");
const {
  createBookToDb,
  getBooksFromDb,
  getUserByIdFromDb,
  updateBookToDb,
  deleteBookFromDb,
} = require("../services/book.services");

const createBook = async (req, res) => {
  try {
    const payload = req.body;
    const book = await createBookToDb(payload);
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
    const books = await getBooksFromDb();
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
    const book = await getUserByIdFromDb(id);
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
    const book = await updateBookToDb({ id, payload: req?.body });
    if (!book) {
      return res.status(400).send({
        message: "Book not found!",
      });
    }

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
    const isDeleted = await deleteBookFromDb(id);
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
