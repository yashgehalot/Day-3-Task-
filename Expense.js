const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // This connects the expense to the specific user
        required: true
    },
    text: {
        type: String,
        required: [true, 'Please add a description']
    },
    amount: {
        type: Number,
        required: [true, 'Please add an amount']
    },
    category: {
        type: String, // e.g., "Food", "Transport"
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Expense || mongoose.model('Expense', ExpenseSchema);