const express = require("express");
const { getAllBrand, getBrandById, addBrand, editBrandById, deletedBrandById, deletedAllBrand } = require("../controllers/brand-controller");


const router = express.Router();

router.get("/", getAllBrand);
router.get("/:id", getBrandById);
router.post("/", addBrand);
router.put("/:id", editBrandById);
router.delete("/:id", deletedBrandById);
router.delete("/", deletedAllBrand);

module.exports = router;
