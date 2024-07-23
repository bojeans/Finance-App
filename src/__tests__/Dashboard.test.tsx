import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../app/dashboard/page";

test("renders dashboard page", () => {
  render(<Dashboard />);
  const heading = screen.getByText(/Dashboard Page/i);
  expect(heading).toBeInTheDocument();
});
