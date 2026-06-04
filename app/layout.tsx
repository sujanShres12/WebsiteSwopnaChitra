import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swopna Chitra | Nepal's Premier Production House",
  description: "Swopna Chitra is a Kathmandu-based production house crafting films, music videos, commercials, and documentaries that celebrate Nepal's stories.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#F4EFE7" }}>
        {children}
      </body>
    </html>
  );
}
