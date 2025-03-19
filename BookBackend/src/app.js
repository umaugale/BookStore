const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const bookRoutes = require("./route");
const authRoutes = require("./authRoutes");

const app = express();

// Fix CORS Middleware
app.use(
  cors({
    origin: "*", // Allow all origins for debugging, change to specific origin in production
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies/auth headers if needed
  })
);

// Explicitly set CORS headers for all responses
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/books", bookRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

module.exports = app;
