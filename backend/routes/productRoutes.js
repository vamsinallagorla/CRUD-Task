const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// Create Product
router.post("/products", async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    if (!name || !price || !category || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({
      name,
      price,
      category,
      description,
    });

    await product.save();

    res.status(201).json({
      message: "Product Added Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Product
router.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Product Updated Successfully",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Product
router.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;