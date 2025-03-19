// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const bookRoutes = require("./route");
// const authRoutes = require("./authRoutes");
// const app = express();
// app.use(
//   cors({
//     origin: "*", 
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// // Middleware
// app.use(morgan("dev"));
// app.use(express.json());

// // Routes
// app.use("/books", bookRoutes);
// app.use("/auth", authRoutes);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Something went wrong!" });
// });

// module.exports = app;













const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require("./route");
const authRoutes = require("./authRoutes");
const path = require('path');
const { log } = require('console');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('./public'));

// Routes
// Routes
app.use("/books", bookRoutes);
app.use("/auth", authRoutes);

const uri = process.env.MONGO_URI;
// Connect to MongoDB
 mongoose.connect(uri, {})
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));
module.exports = app;

