"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  IncomeEntry,
  updateIncome,
  deleteIncome,
} from "../../redux/slices/incomeSlice";

const IncomeList = ({ initialData }: { initialData: any }) => {
  const dispatch = useDispatch();
  const incomes =
    useSelector((state: RootState) => state.income.incomes) || initialData;

  const handleUpdate = (income: IncomeEntry) => {
    const updatedIncome = { ...income, amount: income.amount + 100 }; // Example update
    dispatch(updateIncome(updatedIncome));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteIncome(id));
  };

  return (
    <div>
      <h2>Income List</h2>
      <ul>
        {incomes.map((income: IncomeEntry, index: number) => (
          <li key={index}>
            {income.type}: ${income.amount} on {income.date}
            <button onClick={() => handleUpdate(income)}>Update</button>
            <button onClick={() => handleDelete(income.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
