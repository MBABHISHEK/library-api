// controllers/bookController.js
const Book = require("../models/book");

const bookController = {
  searchBookById: function (req, res) {
    const bookId = req.params.bookId;
    Book.searchById(bookId, (err, rows) => {
      if (err) {
        console.error("Error searching for books:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(rows);
    });
  },
  addBook: function (req, res) {
    const bookData = req.body;
    Book.add(bookData, (err) => {
      if (err) {
        console.error("Error adding book:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Book added successfully" });
    });
  },
};

module.exports = bookController;
// routes/books.js
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Search for a book by ID
router.get("/search-book/:bookId", bookController.searchBookById);

// Add a new book
router.post("/add-book", bookController.addBook);

module.exports = router;
