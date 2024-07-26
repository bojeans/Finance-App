import { GetServerSideProps } from "next/types";
import IncomeForm from "../income/IncomeForm";
import IncomeList from "../income/IncomeList";

export default async function IncomePage() {
  return (
    <div>
      <h1>Income Management</h1>
      <IncomeForm />
      <IncomeList initialData={data} />
    </div>
  );
}
