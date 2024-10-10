import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const [selectedExpense, setSelectedExpense] = useState(null);

    const fetchExpenses = async () => {
        const response = await axios.get('http://localhost:5000/api/expenses');
        setExpenses(response.data);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
            <h1>Expense Tracker</h1>
            <ExpenseForm fetchExpenses={fetchExpenses} selectedExpense={selectedExpense} setSelectedExpense={setSelectedExpense} />
            <ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} setSelectedExpense={setSelectedExpense} />
        </div>
    );
};

export default App;
