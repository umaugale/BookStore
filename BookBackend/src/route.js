const express = require("express");
const Book = require("./models/Book");
const validateBook = require("./validateBook");

const router = express.Router();

// GET /books - Fetch all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /books - Add a new book
router.post("/", validateBook, async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;


