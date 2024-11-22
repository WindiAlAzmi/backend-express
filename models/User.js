const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email harus diisi"],
    validate: {
      validator: validator.isEmail,
      message: "input yang dimasukkan harus berformat email",
    },
  },
  password: {
    type: String,
    required: [true, "password harus diisi"],
    minlength: [6, "password harus minimal 6 karakter"],
  },
  name: {
    type: String,
    required: [true, "nama harus diisi"],
  },
  points : {
    type:String,
    default:0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
