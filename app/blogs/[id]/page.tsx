"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "../[id]/data"; // Update path as needed
import { FiCalendar, FiClock, FiShare2 } from "react-icons/fi";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post: BlogPost | undefined = blogPosts.find(
    (post: BlogPost) => post.id === postId
  );

  if (!post) {
    notFound();
  }

  return (
    <section className="py-20 bg-[#f9f7f5]">
      <div className="max-w-4xl mx-auto px-6">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-amber-500 text-white rounded-full">
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center mr-4">
                <FiCalendar className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <FiClock className="mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {post.title}
            </h1>

            <div className="prose max-w-none text-gray-600 mb-8">
              <p className="text-lg mb-4">{post.excerpt}</p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor.
              </p>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Key Takeaways
              </h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">
                  The future of AI is agentic and autonomous
                </li>
                <li className="mb-2">
                  Healthcare applications are leading the way
                </li>
                <li className="mb-2">
                  Ethical considerations remain paramount
                </li>
              </ul>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-amber-100 hover:text-amber-600 transition-colors">
                <FiShare2 size={18} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
