import type { Metadata } from "next";
import { Provider } from "react-redux";
import store from "../redux/store";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance App",
  description:
    "An application for recording income and expenses for budgetting purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
