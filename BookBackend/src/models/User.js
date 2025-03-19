const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    unique: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
