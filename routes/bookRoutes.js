// routes/books.js
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Search for a book by ID
router.get("/search-book/:bookId", bookController.searchBookById);

// Add a new book
router.post("/add-book", bookController.addBook);

module.exports = router;
