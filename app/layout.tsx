// app/layout.tsx
import { Phone } from "react-feather";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://powerhousetechsolutions.com"),
  title: "Powerhouse Tech Solutions | Software Development Company in Pune",
  description:
    "Powerhouse Tech Solutions is a leading software development company in Pune, India. We provide web development, mobile app development, web app solutions, SaaS products, and custom software development at competitive prices.",
  keywords: [
    "software development company in Pune",
    "web development Pune",
    "mobile app development Pune",
    "custom software Pune",
    "SaaS development Pune",
    "IT solutions Pune",
    "Powerhouse Tech Solutions",
    "web app development",
    "warehouse management CRM",
    "ERP software development Pune",
    "eCommerce development Pune",
  ],
  authors: [
    {
      name: "Powerhouse Tech Solutions",
      url: "https://powerhousetechsolutions.com",
    },
  ],
  openGraph: {
    title: "Powerhouse Tech Solutions | Software Development Company in Pune",
    description:
      "We empower businesses with cutting-edge IT solutions including software, web, and mobile app development.",
    url: "https://powerhousetechsolutions.com",
    siteName: "Powerhouse Tech Solutions",
    images: [
      {
        url: "/images/powerhouselogo.png",
        width: 1200,
        height: 630,
        alt: "Powerhouse Tech Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerhouse Tech Solutions | Software Development Company in Pune",
    description:
      "Providing top-tier IT solutions including software, mobile, and web app development.",
    images: ["/images/powerhouselogo.png"],
    creator: "@yourhandle",
  },
  alternates: {
    canonical: "https://powerhousetechsolutions.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Favicon & App Icons */}
        <link
          rel="icon"
          href="/images/powerhouselogo.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareCompany",
              name: "Powerhouse Tech Solutions",
              image:
                "https://powerhousetechsolutions.com/images/powerhouselogo.png",
              "@id": "https://powerhousetechsolutions.com",
              url: "https://powerhousetechsolutions.com",
              Phone: "+91-8788098130",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pune, Maharashtra, India",
                addressLocality: "Pune",
                postalCode: "411041",
                addressCountry: "IN",
              },
              description:
                "Powerhouse Tech Solutions is a leading IT services provider in Pune offering software, web, and mobile app development.",
              sameAs: [
                "https://www.facebook.com/powerhousetechsolutions",
                "https://www.linkedin.com/company/powerhousetechsolutions",
                "https://twitter.com/yourhandle",
              ],
            }),
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-15YD85B1JS"
        ></script>
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
