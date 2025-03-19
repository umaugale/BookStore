const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./src/authRoutes");
const booksRoutes = require("./src/route");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB(); 
  app.use("/auth", authRoutes);
  app.use("/books", booksRoutes);

  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
};

startServer();
