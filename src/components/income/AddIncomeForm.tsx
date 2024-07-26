import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../../redux/slices/incomeSlice";

const AddIncomeForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addIncome({ id: Date.now(), amount: parseFloat(amount), date, type })
    );
    setAmount("");
    setDate("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default AddIncomeForm;
