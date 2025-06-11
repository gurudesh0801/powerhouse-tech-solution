"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* 🔵 Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="blob w-96 h-96 bg-pink-300"
          style={{ top: "10%", left: "5%" }}
        ></div>
        <div
          className="blob w-72 h-72 bg-blue-300"
          style={{ top: "60%", left: "60%" }}
        ></div>
        <div
          className="blob w-80 h-80 bg-purple-300"
          style={{ top: "30%", left: "70%" }}
        ></div>
        <div
          className="blob w-64 h-64 bg-yellow-300"
          style={{ top: "80%", left: "10%" }}
        ></div>
      </div>

      {/* ✨ Main Content */}
      <div className="max-w-5xl text-center space-y-6 z-10">
        <motion.h1
          className="text-4xl font-outfit sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Powerhouse Tech Solutions
        </motion.h1>

        <motion.p
          className="text-lg font-outfit sm:text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Empowering your business with cutting-edge IT services, software
          development, and cloud solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="#services"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Our Services
          </Link>
          <Link
            href="#contact"
            className="border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
