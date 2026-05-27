const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============ ENDPOINT API PROXY ============

// 1. Get OTP (tahap 1)
app.get('/api/orderkuota/getotp', async (req, res) => {
    const { apikey, username, password } = req.query;
    
    if (!apikey || !username || !password) {
        return res.status(400).json({ error: 'Missing required: apikey, username, password' });
    }
    
    try {
        const targetUrl = `https://sanzxcode.my.id/orderkuota/getotp?apikey=${encodeURIComponent(apikey)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
        const response = await axios.get(targetUrl);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// 2. Get Token (tahap 2)
app.get('/api/orderkuota/gettoken', async (req, res) => {
    const { apikey, username, otp } = req.query;
    
    if (!apikey || !username || !otp) {
        return res.status(400).json({ error: 'Missing required: apikey, username, otp' });
    }
    
    try {
        const targetUrl = `https://sanzxcode.my.id/orderkuota/gettoken?apikey=${encodeURIComponent(apikey)}&username=${encodeURIComponent(username)}&otp=${encodeURIComponent(otp)}`;
        const response = await axios.get(targetUrl);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// 3. Create QRIS Payment
app.get('/api/orderkuota/createpayment', async (req, res) => {
    const { apikey, username, token, amount } = req.query;
    
    if (!apikey || !username || !token || !amount) {
        return res.status(400).json({ error: 'Missing required: apikey, username, token, amount' });
    }
    
    try {
        const targetUrl = `https://sanzxcode.my.id/orderkuota/createpayment?apikey=${encodeURIComponent(apikey)}&username=${encodeURIComponent(username)}&token=${encodeURIComponent(token)}&amount=${encodeURIComponent(amount)}`;
        const response = await axios.get(targetUrl);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// 4. Cek Mutasi QRIS
app.get('/api/orderkuota/mutasiqr', async (req, res) => {
    const { apikey, username, token } = req.query;
    
    if (!apikey || !username || !token) {
        return res.status(400).json({ error: 'Missing required: apikey, username, token' });
    }
    
    try {
        const targetUrl = `https://sanzxcode.my.id/orderkuota/mutasiqr?apikey=${encodeURIComponent(apikey)}&username=${encodeURIComponent(username)}&token=${encodeURIComponent(token)}`;
        const response = await axios.get(targetUrl);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// ============ FRONTEND ============
// Menampilkan index.html untuk root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ============ START SERVER ============
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;