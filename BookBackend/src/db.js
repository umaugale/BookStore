const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./authRoutes");
const booksRoutes = require("./route");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ✅ Removed deprecated options
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Start the server only if DB is connected
const startServer = async () => {
  await connectDB();
  app.use("/auth", authRoutes);
  app.use("/books", booksRoutes);

  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();
