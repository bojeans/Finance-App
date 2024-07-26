import ReduxProvider from "@/components/ReduxProvider";
import IncomeForm from "../income/IncomeForm";
import IncomeList from "../income/IncomeList";

export default async function IncomePage() {
  return (
    <ReduxProvider>
      <div>
        <h1>Income Management</h1>
        <IncomeForm />
        <IncomeList initialData={data} />
      </div>
    </ReduxProvider>
  );
}
