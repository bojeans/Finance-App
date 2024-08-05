"use client";

import { useEffect, useState } from "react";
import IncomeList from "@/components/income/IncomeList";

const api = process.env.NEXT_PUBLIC_API_URL;

export default function IncomeDataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from API:", `${api}/income`);
        const res = await fetch(`${api}/income`, {
          cache: "no-store", // Avoid caching issues
        });

        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched data:", data);
        setData(data);
      } catch (error) {
        console.error("Failed to fetch income data:", error);
        setError(null);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return data ? <IncomeList initialData={data} /> : <p>Loading...</p>;
}
