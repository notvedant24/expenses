import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const WalletBalance = () => {
  const { balance } = useContext(ExpenseContext);
  return <h2>Wallet Balance: ${balance.toFixed(2)}</h2>;
};

export default WalletBalance;
