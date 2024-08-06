import ReduxProvider from "@/components/ReduxProvider";
import IncomeForm from "@/components/income/IncomeForm";
import Fetch from "@/components/income/Fetch";

export default function IncomePage() {
  return (
    <ReduxProvider>
      <div>
        <h1>Income Management</h1>
        <IncomeForm />
        <Fetch />
      </div>
    </ReduxProvider>
  );
}
