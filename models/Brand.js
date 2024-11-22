const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name harus diisi"],
  },
  description: {
    type: String,
    required: [true, "description harus diisi"],
    minlength: [6, "description harus minimal 6 karakter"],
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

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
