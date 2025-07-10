import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dukay Levente Portfolio",
  description: "Dukay Levente's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0E100F] font-hanken scroll-smooth overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
