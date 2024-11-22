const express = require("express");
const { getAllVoucher, getVoucherById, addVoucher, editVoucherById, deletedVoucherById, deletedAllVoucher, getAllVoucherByBrand } = require("../controllers/voucher-controller");

const router = express.Router();

router.get("/", getAllVoucher);
router.get("/brand/:id", getAllVoucherByBrand);
router.get("/:id", getVoucherById);
router.post("/", addVoucher);
router.put("/:id", editVoucherById);
router.delete("/:id", deletedVoucherById);
router.delete("/", deletedAllVoucher);

module.exports = router;
