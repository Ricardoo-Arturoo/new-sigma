
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";
import { Footer } from "./components";
import { NavbarSecundaria } from "./components/navbar/NavbarSecundaria";



export const metadata: Metadata = {
  title: "Sigma",
  description: "Menu principal Sigma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-bold">
        <Navbar />
        <NavbarSecundaria />       
        {children}
        <Footer />
      </body>
    </html>
  );
}

