import { Metadata } from "next";
import BlogComponent from "./BlogClient";

export const metadata: Metadata = {
  title:
    "Tech Insights & Industry Trends 2025 | Powerhouse Tech Solutions Blog",
  description:
    "Explore the latest technology trends, AI advancements, sustainability practices, and the future of work in 2025. Read expert insights and articles from Powerhouse Tech Solutions.",
};

export default function BlogPage() {
  return <BlogComponent />;
}
