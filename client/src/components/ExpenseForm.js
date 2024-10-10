import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseForm = ({ fetchExpenses, selectedExpense, setSelectedExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (selectedExpense) {
            setDescription(selectedExpense.description);
            setAmount(selectedExpense.amount);
        } else {
            setDescription('');
            setAmount('');
        }
    }, [selectedExpense]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const expenseData = { description, amount };

        if (selectedExpense) {
            await axios.put(`http://localhost:5000/api/expenses/${selectedExpense._id}`, expenseData);
        } else {
            await axios.post('http://localhost:5000/api/expenses', expenseData);
        }

        fetchExpenses();
        setSelectedExpense(null);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">{selectedExpense ? 'Update Expense' : 'Add Expense'}</button>
        </form>
    );
};

export default ExpenseForm;
