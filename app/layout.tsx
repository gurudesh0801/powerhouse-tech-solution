// app/layout.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Powerhouse Tech Solutions",
  description: "Empowering your business with cutting-edge IT solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Add Navbar here */}
        <ScrollToTopButton />
        <main className="pt-16">{children}</main> {/* Add top padding */}
        <Footer />
      </body>
    </html>
  );
}
