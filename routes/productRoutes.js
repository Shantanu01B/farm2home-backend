// backend/routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

const formatCategory = (category) => {
    return category.trim().charAt(0).toUpperCase() + category.trim().slice(1).toLowerCase();
};

// Add a product
router.post('/add', async(req, res) => {
    const { name, category, price, description, stock, image, addedBy } = req.body;
    try {
        const newProduct = new Product({
            name,
            category: formatCategory(category),
            price,
            description,
            stock,
            image,
            addedBy,
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
});

// Get products by farmer
router.get('/:addedBy', async(req, res) => {
    try {
        const products = await Product.find({ addedBy: req.params.addedBy });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

// Get all products
router.get('/', async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all products', error });
    }
});

// Update a product
router.put('/update/:id', async(req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
});

// Delete a product
router.delete('/delete/:id', async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
});

// ✅ Get single product by ID (needed for ProductDetail.jsx)
router.get('/item/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product by ID', error });
    }
});

module.exports = router;