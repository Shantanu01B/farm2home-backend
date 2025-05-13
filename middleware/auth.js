// server/routes/auth.js
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Hardcoded credentials (or set in env variables)
const farmerEmail = 'farmer@farm.com';
const farmerPassword = 'farmer1234';

router.post('/farmer-login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Authenticate farmer
    if (email === farmerEmail && password === farmerPassword) {
        const token = jwt.sign({ email, role: 'farmer' },
            process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' }
        );
        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});

export default router;