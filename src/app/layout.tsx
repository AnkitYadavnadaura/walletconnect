import type { Metadata } from "next";
import "../styles/globals.css"; // Optional global styles

export const metadata: Metadata = {
  title: "Wallet connect",
  description: "Created By the Great Ankit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
