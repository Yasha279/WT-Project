import React from 'react';

const ExpenseList = ({ expenses, fetchExpenses, setSelectedExpense }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/expenses/${id}`);
        fetchExpenses();
    };

    return (
        <ul style={{ listStyleType: 'none', padding: '0' }}>
            {expenses.map(expense => (
                <li key={expense._id} style={{ padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}>
                    {expense.description}: ${expense.amount.toFixed(2)}
                    <button onClick={() => setSelectedExpense(expense)} style={{ marginLeft: '10px' }}>Edit</button>
                    <button onClick={() => handleDelete(expense._id)} style={{ marginLeft: '10px' }}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;
