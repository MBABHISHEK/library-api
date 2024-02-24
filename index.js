const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Import routes
const bookRoutes = require("./routes/bookRoutes.js");
/*
const ebookRoutes = require("./routes/ebookRoutes");
const memberRoutes = require("./routes/memberRoutes");
const staffRoutes = require("./routes/staffRoutes");
const loginRoutes = require("./routes/loginRoutes");
const fineRoutes = require("./routes/fineRoutes");*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
/*app.use("/books", bookRoutes);
app.use("/ebooks", ebookRoutes);
app.use("/members", memberRoutes);
app.use("/staff", staffRoutes);
app.use("/login", loginRoutes);
app.use("/fines", fineRoutes);*/

// checkConnection.js
const connection = require("./config/db");

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
