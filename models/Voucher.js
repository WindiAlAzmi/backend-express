const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
  nameVoucher: {
    type: String,
    required: [true, "name harus diisi"],
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  costInPoints: {
    type: String,
    required: [true, "wajib diisi"],
  },
  expirationDate: {
    type: Date, //month-date-year
  },
  description: {
    type: String,
    minlength: [6, "description harus minimal 6 karakter"],
    default:null
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

const Voucher = mongoose.model("Voucher", voucherSchema);
module.exports = Voucher;
