const express = require("express");

const userRoute = require("./user-route");
const transactionRoute = require("./transaction-route");
const voucherRoute = require("./voucher-route");
const brandRoute = require("./brand-route");

const router = express.Router();

router.use("/users", userRoute);
router.use("/transaction/redemption", transactionRoute);
router.use("/voucher", voucherRoute);
router.use("/brand", brandRoute);


module.exports = router;
