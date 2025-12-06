import { Inter } from "next/font/google";
import "./globals.css";

import ClientLayoutWrapper from "./components/ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Unicoat Abrasive Industries | Aluminum Oxide | Steel Shot | Glass Beads | Steel Grit | Garnet Sand Manufacturers, Suppliers, Traders, Exporters in Ahmedabad, Gujarat, India</title>
   
      </head>
      <body className={inter.className} cz-shortcut-listen="true">
        <ClientLayoutWrapper>
          {children} 
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}