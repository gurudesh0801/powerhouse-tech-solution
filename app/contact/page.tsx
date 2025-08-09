// app/contact/page.tsx
import { Metadata } from "next";
import ContactPage from "./ContactClient"; // the "use client" component

export const metadata: Metadata = {
  title: "Contact | Powerhouse Tech Solutions | Web, Mobile & Cloud Experts",
  description:
    "Get in touch with Powerhouse Tech Solutions for web development, mobile app development, cloud services, AI-powered solutions, and more. Quick response guaranteed.",
};

export default function Contact() {
  return <ContactPage />;
}
