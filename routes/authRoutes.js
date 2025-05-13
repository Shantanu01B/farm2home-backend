const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// Fixed farmer credentials for login validation
const farmer = {
    email: 'farmer@example.com',
    password: 'password123', // Password for login
};

// Use the login function from the controller
router.post('/login', login(farmer));

module.exports = router;