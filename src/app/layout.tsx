import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arushi Gandhi",
  description:
    "Co-founder and CEO at Newmeasure. Writing, projects, and a few places along the way. San Francisco / Bangalore.",
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
