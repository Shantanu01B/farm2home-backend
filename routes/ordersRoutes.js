// src/routes/ordersRoutes.js (backend)
import express from "express";
import Order from "../models/Order.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Order (After Checkout)
router.post("/create", verifyToken, async(req, res) => {
    const { items, totalPrice } = req.body;

    try {
        const newOrder = new Order({
            user: req.user.id, // Current user's ID from JWT token
            items,
            totalPrice,
            status: "pending",
        });

        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ error: "Error placing order" });
    }
});

export default router;