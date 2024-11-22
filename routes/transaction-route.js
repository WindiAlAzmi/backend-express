const express = require("express");
const { getAllTransaction, getTransactionById, addTransaction, editTransactionById, deletedTransactionById, deletedAllTransaction } = require("../controllers/transaction-controller");

const router = express.Router();

router.get("/", getAllTransaction);
router.get("/:id", getTransactionById);
router.post("/", addTransaction);
router.put("/:id", editTransactionById);
router.delete("/:id", deletedTransactionById);
router.delete("/", deletedAllTransaction);

module.exports = router;
