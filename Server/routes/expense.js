const express = require('express');
const router = express.Router();
const Expense = require('./models/Expense');

// Get
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Create 
router.post('/', async (req, res) => {
    const expense = new Expense(req.body);
    try {
        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update 
router.put('/:id', async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(expense);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: 'Expense deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
