const Book = require("../models/book.model");

const createBookToDb = async (payload) => {
  const book = new Book(data);
  await book.save();
  return book;
};

const getBooksFromDb = async () => {
  const books = await Book.find({}).sort({ _id: -1 }).limit(100);
  return books;
};

const getUserByIdFromDb = async (id) => {
  const book = await Book.findById({ _id: id });
  return book;
};

const updateBookToDb = async ({ id, payload }) => {
  const book = await Book.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return book;
};

const deleteBookFromDb = async (id) => {
  const book = await Book.findByIdAndDelete({ _id: id });
  return book;
};

module.exports = {
  createBookToDb,
  getBooksFromDb,
  getUserByIdFromDb,
  updateBookToDb,
  deleteBookFromDb,
};
