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
      <head>
        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-15YD85B1JS"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-15YD85B1JS');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <ScrollToTopButton />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
