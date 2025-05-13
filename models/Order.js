// src/models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    }, ],
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "pending", // can be "pending", "completed", etc.
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;