import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => Number(localStorage.getItem("balance")) || 5000);
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem("expenses")) || []);

  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [balance, expenses]);

  return (
    <ExpenseContext.Provider value={{ balance, setBalance, expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
