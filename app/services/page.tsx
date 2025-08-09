import { Metadata } from "next";
import ServicesPage from "./ServiceClient";

export const metadata: Metadata = {
  title: "Custom Software & IT Services | Powerhouse Tech Solutions Pune",
  description:
    "Explore our web development, mobile app development, cloud solutions, AI-powered services, and UI/UX design. Powerhouse Tech Solutions delivers scalable, secure, and innovative technology for your business.",
};

export default function Services() {
  return <ServicesPage />;
}
