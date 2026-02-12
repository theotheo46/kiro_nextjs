import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calories Calculator",
  description: "Track calories for your meals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
