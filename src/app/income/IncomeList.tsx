"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IncomeState } from "../../redux/slices/incomeSlice";

export default function IncomeList({ initialData }) {
  const incomes =
    useSelector((state: RootState) => state.income) || initialData;

  return (
    <div>
      <h2>Income List</h2>
      <ul>
        {incomes.map((income: IncomeState, index: number) => (
          <li key={index}>
            {income.type}: ${income.amount} on {income.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
