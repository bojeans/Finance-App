import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IncomeEntry {
  id: number;
  amount: number;
  date: string;
  type: string;
}

interface IncomeState {
  incomes: IncomeEntry[];
}

const initialState: IncomeState = {
  incomes: [],
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<IncomeEntry>) => {
      state.incomes.push(action.payload);
    },
    setIncomes: (state, action: PayloadAction<IncomeEntry[]>) => {
      state.incomes = action.payload;
    },
    updateIncome: (state, action: PayloadAction<IncomeEntry>) => {
      const index = state.incomes.findIndex(
        (income) => income.id === action.payload.id
      );
      if (index !== -1) {
        state.incomes[index] = action.payload;
      }
    },
    deleteIncome: (state, action: PayloadAction<number>) => {
      state.incomes = state.incomes.filter(
        (income) => income.id !== action.payload
      );
    },
  },
});

export const { addIncome, setIncomes, updateIncome, deleteIncome } =
  incomeSlice.actions;
export default incomeSlice.reducer;
export type { IncomeEntry as Income, IncomeState };
