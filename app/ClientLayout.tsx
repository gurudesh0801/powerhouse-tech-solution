// app/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ChatBot from "./components/ChatBot";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavAndFooter = pathname.startsWith("/admin/dashboard");

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      {!hideNavAndFooter && <ScrollToTopButton />}
      {!hideNavAndFooter && <ChatBot />}
      <main>{children}</main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}
