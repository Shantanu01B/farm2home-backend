// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, enum: ['Farmer', 'Normal User'], default: 'Normal User' },
    googleId: { type: String }, // For Google users
    name: { type: String } // For Google display name
});

module.exports = mongoose.model('User', userSchema);