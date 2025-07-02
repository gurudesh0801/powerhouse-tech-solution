// app/layout.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx

export const metadata = {
  title: "Powerhouse Tech Solutions",
  description: "Empowering your business with cutting-edge IT solutions.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile app development",
    "Powerhouse Tech",
    "custom software",
    "SaaS development",
  ],
  authors: [
    {
      name: "Powerhouse Tech Solutions",
      url: "https://powerhousetechsolutions.com",
    },
  ],
  openGraph: {
    title: "Powerhouse Tech Solutions",
    description: "Empowering your business with cutting-edge IT solutions.",
    url: "https://powerhousetechsolutions.com",
    siteName: "Powerhouse Tech Solutions",
    images: [
      {
        url: "/images/powerhouselogo.png", // Put this image in your public/images folder
        width: 1200,
        height: 630,
        alt: "Powerhouse Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerhouse Tech Solutions",
    description: "Empowering your business with cutting-edge IT solutions.",
    images: ["/images/og-image.jpg"],
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/powerhouselogo.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Analytics */}
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
