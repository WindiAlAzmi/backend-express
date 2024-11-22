const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vouchers: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voucher",
      },
    ],
  },
  quantity: {
    type: Number,
    required:true
  },
  description: {
    type: String,
    minlength: [6, "description harus minimal 6 karakter"],
    default: null,
  },
  totalCost: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'failed', 'success'], 
  },
  transaction_date: {
    type: Date,
    default: Date.now,
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

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
