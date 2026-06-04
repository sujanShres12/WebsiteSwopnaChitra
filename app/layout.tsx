import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swopna Chitra | Nepal's Premier Production House",
  description:
    "Swopna Chitra is a Kathmandu-based production house crafting films, music videos, commercials, and documentaries that celebrate Nepal's stories.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
