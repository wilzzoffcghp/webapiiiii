const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Proxy endpoints
app.get('/api/orderkuota/getotp', async (req, res) => {
    try {
        const response = await axios.get('https://sanzxcode.my.id/orderkuota/getotp', { params: req.query });
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
});
app.get('/api/orderkuota/gettoken', async (req, res) => {
    try {
        const response = await axios.get('https://sanzxcode.my.id/orderkuota/gettoken', { params: req.query });
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
});
app.get('/api/orderkuota/createpayment', async (req, res) => {
    try {
        const response = await axios.get('https://sanzxcode.my.id/orderkuota/createpayment', { params: req.query });
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
});
app.get('/api/orderkuota/mutasiqr', async (req, res) => {
    try {
        const response = await axios.get('https://sanzxcode.my.id/orderkuota/mutasiqr', { params: req.query });
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.message });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
