import ReduxProvider from "@/components/ReduxProvider";
import IncomeForm from "../income/IncomeForm";
import IncomeList from "../income/IncomeList";

export default async function IncomePage() {
  const res = await fetch("/income");
  const data = await res.json();
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
