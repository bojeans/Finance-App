import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./slices/incomeSlice";

const store = configureStore({
  reducer: {
    income: incomeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
