const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
  nameVoucher: {
    type: String,
    required: [true, "name harus diisi"],
  },
  discount: {
    type: Number
  },
  costInPoints: {
    type: String,
    required: [true, "wajib diisi"],
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
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
