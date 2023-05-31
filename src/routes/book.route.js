const { createBook, deleteBookById, getBookById, getBooks, updateBook } = require("../controllers/book.controllers");

const express = require("express");
const router = express.Router();

router.post("/", createBook);

router.get("/", getBooks);

router.get("/:id", getBookById);

router.put("/:id", updateBook);

router.delete("/:id", deleteBookById);

module.exports = router;
