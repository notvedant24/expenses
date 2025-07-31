import Modal from "react-modal";
import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddIncomeModal = ({ isOpen, onRequestClose }) => {
  const { setBalance } = useContext(ExpenseContext);
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const income = Number(amount);
    if (income > 0) {
      setBalance(prev => prev + income);
      setAmount("");
      onRequestClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Income Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Balance</button>
      </form>
    </Modal>
  );
};

export default AddIncomeModal;
