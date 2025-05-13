const login = (farmerCredentials) => async(req, res) => {
    const { email, password } = req.body;

    // Log the received credentials for debugging
    console.log('Received login credentials:', req.body);

    // Validate if the email and password match the fixed farmer credentials
    if (email === farmerCredentials.email && password === farmerCredentials.password) {
        // Send a successful response
        return res.status(200).json({ message: 'Login successful', user: farmerCredentials });
    }

    // If credentials don't match, send an error message
    return res.status(400).json({ message: 'Invalid email or password' });
};

module.exports = { login };