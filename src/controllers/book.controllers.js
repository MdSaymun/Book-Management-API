const {
  createBookToDb,
  getBooksFromDb,
  updateBookToDb,
  deleteBookFromDb,
  getBookByIdFromDb,
} = require("../services/book.services");

const createBook = async (req, res) => {
  try {
    const { title, author, description, publishedYear } = req.body || {};

    // Validate required fields
    if (!title || !author) {
      return res.status(400).json({ message: "Title and author are required fields." });
    }

    // create book payload
    const payload = {
      title,
      author,
      description: description || "",
      publishedYear: publishedYear || 0,
    };

    const book = await createBookToDb(payload);
    res.status(201).send({
      message: "Book Created Successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create the book." });
  }
};

const getBooks = async (req, res) => {
  try {
    // Retrieve all books
    const books = await getBooksFromDb();
    res.status(200).send({
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve books." });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve book by ID
    const book = await getBookByIdFromDb(id);

    // Check if book exists
    if (!book) {
      return res.status(404).send({
        message: "Book not found!",
      });
    }
    res.status(200).send({
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve the book." });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, description, publishedYear } = req.body || {};

    // update book payload
    const payload = {
      title,
      author,
      description,
      publishedYear,
    };

    const book = await updateBookToDb({ id, payload });
    if (!book) {
      return res.status(404).send({
        message: "Book not found!",
      });
    }

    res.status(200).send({
      message: "Book Updated Successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update the book." });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await deleteBookFromDb(id);

    if (!deletedBook) {
      return res.status(404).send({
        message: "Book not found!",
      });
    }
    res.status(200).send({
      message: "Book deleted successfully.",
      deletedBook,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to delete the book.",
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
