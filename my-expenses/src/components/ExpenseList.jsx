import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, setExpenses, balance, setBalance } = useContext(ExpenseContext);

  const deleteExpense = (id, price) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
    setBalance(balance + price);
  };

  return (
    <div>
      <h3>Expense History</h3>
      {expenses.length === 0 ? <p>No expenses yet.</p> : (
        <ul>
          {expenses.map((exp) => (
            <li key={exp.id}>
              {exp.title} - ${exp.price} ({exp.category}) [{exp.date}]
              <button onClick={() => deleteExpense(exp.id, exp.price)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
