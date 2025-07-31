import Modal from "react-modal";
import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddExpenseModal = ({ isOpen, onRequestClose }) => {
  const [form, setForm] = useState({ title: "", price: "", category: "", date: "" });
  const { balance, setBalance, expenses, setExpenses } = useContext(ExpenseContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, category, date } = form;
    const priceNum = Number(price);
    if (priceNum > balance) {
      alert("Cannot spend more than wallet balance.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      price: priceNum,
      category,
      date,
    };

    setExpenses([...expenses, newExpense]);
    setBalance(balance - priceNum);
    setForm({ title: "", price: "", category: "", date: "" });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Amount" required />
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <button type="submit">Add Expense</button>
      </form>
    </Modal>
  );
};

export default AddExpenseModal;
