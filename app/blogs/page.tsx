"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock, FiShare2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "AI in 2025: From Automation to Agentic AI",
    excerpt:
      "How AI is evolving beyond automation to autonomous decision-making systems, reshaping industries like healthcare and finance.",
    category: "AI & ML",
    date: "July 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743d",
  },
  {
    id: 2,
    title: "Sustainable Tech: The Rise of Circular Economies",
    excerpt:
      "Companies are adopting zero-waste policies and circular supply chains to meet 2025 sustainability goals.",
    category: "Sustainability",
    date: "June 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
  },
  {
    id: 3,
    title: "The Hybrid Work Revolution in 2025",
    excerpt:
      "Why 64% of employees now prefer flexible work models, and how companies are adapting to retain talent.",
    category: "Future of Work",
    date: "June 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
];
export default function BlogComponent() {
  const router = useRouter();
  return (
    <section className="relative py-28 overflow-hidden bg-[#f9f7f5]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 -top-20 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full filter blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-1/3 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "spring",
            }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white/80 border border-white/80 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Insights & Articles
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="relative inline-block">
              <span className="relative z-10">2025 Industry</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-gradient-to-r from-yellow-400/80 to-amber-400/80 -z-0"></span>
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Trends
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cutting-edge insights on AI, sustainability, and the future of work
            in 2025.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-full flex flex-col bg-white/80 backdrop-blur-sm border border-white/80">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-amber-500 text-white rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <FiCalendar className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <button
                      className="flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors"
                      onClick={() => router.push(`/blogs/${post.id}`)}
                    >
                      Read more
                      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-amber-100 hover:text-amber-600 transition-colors">
                      <FiShare2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-lg overflow-hidden border border-white/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30 md:bg-gradient-to-r md:from-black/20 md:via-black/10 md:to-transparent"></div>
                <span className="absolute top-4 left-4 px-4 py-1 text-sm font-medium bg-amber-500 text-white rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <FiCalendar className="mr-1" />
                    July 2, 2025
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />8 min read
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Quantum Computing Breakthroughs in 2025
                </h3>
                <p className="text-gray-600 mb-6">
                  How quantum computing is solving previously intractable
                  problems in logistics, cryptography, and drug discovery.
                </p>
                <button className="self-start px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-medium rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-md flex items-center gap-2">
                  Read Featured Article
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/80 p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Stay Ahead with Our 2025 Trends Report
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get monthly insights on AI, sustainability, and emerging
            technologies straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-medium rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-md">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
