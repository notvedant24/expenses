import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  const data = expenses.reduce((acc, exp) => {
    const found = acc.find(item => item.name === exp.category);
    if (found) {
      found.value += exp.price;
    } else {
      acc.push({ name: exp.category, value: exp.price });
    }
    return acc;
  }, []);

  return (
    <div>
      <h3>Expense Summary</h3>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseSummary;
