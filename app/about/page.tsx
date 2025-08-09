// app/about/page.tsx
import { Metadata } from "next";
import AboutHero from "../components/About";
import AboutPage from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Powerhouse Tech Solutions | Leading IT Company in Pune",
  description:
    "Discover the story of Powerhouse Tech Solutions – a top software development company in Pune. We specialize in web development, mobile app development, SaaS products, and innovative tech solutions to drive your business forward.",
};

export default function About() {
  return <AboutPage />;
}
