import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ExpenseTrends = () => {
  const { expenses } = useContext(ExpenseContext);

  const data = expenses.reduce((acc, exp) => {
    const found = acc.find(item => item.category === exp.category);
    if (found) {
      found.amount += exp.price;
    } else {
      acc.push({ category: exp.category, amount: exp.price });
    }
    return acc;
  }, []);

  return (
    <div>
      <h3>Expense Trends</h3>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseTrends;
