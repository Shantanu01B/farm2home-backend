const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // React frontend
    credentials: true
}));

// Use environment variable for MongoDB URI
const MONGO_URI = process.env.MONGODB_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.log('❌ MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));