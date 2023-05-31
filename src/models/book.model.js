const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: String,
    publishedYear: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// creating model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
