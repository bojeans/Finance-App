"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../../redux/slices/incomeSlice";

export default function IncomeForm() {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addIncome({
        amount: parseFloat(amount),
        date,
        type,
        id: 0,
      })
    );
  };

  return (
    <div>
      <h1>Create Income</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
