const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all expenses
router.get('/expenses', async (req, res) => {
    try {
        const allExpenses = await pool.query('SELECT * FROM expenses');
        res.json(allExpenses.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
