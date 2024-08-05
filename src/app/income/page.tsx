import ReduxProvider from "@/components/ReduxProvider";
import IncomeForm from "@/components/income/IncomeForm";
import IncomeList from "@/components/income/IncomeList";

const api = process.env.NEXT_PUBLIC_API_URL;

export default async function IncomePage() {
  const res = await fetch(`${api}/income`, {
    cache: "no-store", // Avoid caching issues
  });
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
