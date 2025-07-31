import { useState } from "react";
import WalletBalance from "./components/WalletBalance";
import AddExpenseModal from "./components/AddExpenseModal";
import AddIncomeModal from "./components/AddIncomeModal";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTrends from "./components/ExpenseTrends";
import ExpenseProvider from "./context/ExpenseContext";

function App() {
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [expenseOpen, setExpenseOpen] = useState(false);

  return (
    <ExpenseProvider>
      <div>
        <h1>Expense Tracker</h1>
        <WalletBalance />
        <button type="button" onClick={() => setIncomeOpen(true)}>+ Add Income</button>
        <button type="button" onClick={() => setExpenseOpen(true)}>+ Add Expense</button>
        <AddIncomeModal isOpen={incomeOpen} onRequestClose={() => setIncomeOpen(false)} />
        <AddExpenseModal isOpen={expenseOpen} onRequestClose={() => setExpenseOpen(false)} />
        <ExpenseList />
        <ExpenseSummary />
        <ExpenseTrends />
      </div>
    </ExpenseProvider>
  );
}

export default App;
