// config/db.js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abhishek@2003@sql",
  database: "libraryweb",
  multipleStatements: true,
});

module.exports = connection;
