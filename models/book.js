// models/book.js
const connection = require("../config/db");
const addBook = (bookData, callback) => {
  connection.query(
    "SELECT COUNT(*) AS count FROM Department WHERE subject_id = ?",
    [bookData.categorised],
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      const subjectExists = result[0].count > 0;
      if (subjectExists) {
        connection.query(
          "INSERT INTO Books (Book_id, Book_title, Book_author, Book_edition, categorised) VALUES (?, ?, ?, ?, ?)",
          [
            bookData.Book_id,
            bookData.Book_title,
            bookData.Book_author,
            bookData.Book_edition,
            bookData.categorised,
          ],
          (insertErr, insertResult) => {
            if (insertErr) {
              return callback(insertErr, null);
            }
            return callback(null, insertResult);
          }
        );
      } else {
        return callback({ error: "Subject does not exist" }, null);
      }
    }
  );
};
const searchBook = {
  searchById: function (bookId, callback) {
    connection.query(
      "SELECT * FROM Books WHERE book_id = ?",
      [bookId],
      callback
    );
  },
  add: function (bookData, callback) {
    connection.query(
      "SELECT COUNT(*) AS count FROM Department WHERE subject_id = ?",
      [bookData.categorised],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        if (result[0].count > 0) {
          connection.query(
            "INSERT INTO Books (Book_id, Book_title, Book_author, Book_edition, categorised) VALUES (?, ?, ?, ?, ?)",
            [
              bookData.Book_id,
              bookData.Book_title,
              bookData.Book_author,
              bookData.Book_edition,
              bookData.categorised,
            ],
            callback
          );
        } else {
          callback({ error: "Subject does not exist" });
        }
      }
    );
  },
};

module.exports = {
  addBook,
  searchBook,
};
