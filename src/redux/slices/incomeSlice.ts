import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IncomeState {
  amount: number;
  date: string;
  type: string;
}

const initialState: IncomeState[] = [];

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<IncomeState>) => {
      state.push(action.payload);
    },
    updateIncome: (
      state,
      action: PayloadAction<{ index: number; income: IncomeState }>
    ) => {
      state[action.payload.index] = action.payload.income;
    },
    deleteIncome: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addIncome, updateIncome, deleteIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
