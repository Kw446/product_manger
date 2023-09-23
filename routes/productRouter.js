const express = require("express");
const {
  CreateProduct,
  productList,
  updateProduct,
  productPagination,
} = require("../controller/productController");

let router = express.Router();
router.post("/create", CreateProduct);
router.get("/list", productList);
router.patch("/update/:id", updateProduct);
router.get("/pegination", productPagination);

module.exports = { router };
