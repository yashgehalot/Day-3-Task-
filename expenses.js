const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware'); // Your security guard
const Expense = require('../models/Expense'); // Your database model

// @route   POST api/expenses
// @desc    Add a new expense
// @access  Private
router.post('/', protect, async (req, res) => {
    try {
        const { text, amount, category } = req.body;

        const newExpense = new Expense({
            text,
            amount,
            category,
            user: req.user.id // Takes the User ID from the token
        });

        const expense = await newExpense.save();
        res.json(expense);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;