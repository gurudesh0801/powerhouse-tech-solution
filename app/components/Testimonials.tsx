"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Anuj Verma",
    position: "CTO, RetailStack",
    quote:
      "Powerhouse Tech Solutions delivered beyond expectations. Their team is highly skilled, communicative, and truly collaborative.",
    image: "/avatars/avatar1.png",
  },
  {
    name: "Rohit Singh",
    position: "Founder, EdSmart",
    quote:
      "They understood our vision and brought it to life with elegance and scalability. Highly recommended for modern tech needs.",
    image: "/avatars/avatar2.png",
  },
  {
    name: "Meera Patel",
    position: "Product Manager, HealthBridge",
    quote:
      "The workflow, execution, and post-launch support were all on point. Working with Powerhouse was a game changer.",
    image: "/avatars/avatar3.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-gray-50 to-white py-20 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900"
        >
          What{" "}
          <span className="relative z-10">
            Our Clients
            <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md z-[-1]"></span>
          </span>{" "}
          Say
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-white shadow-lg rounded-lg px-8 py-10 relative max-w-3xl mx-auto"
          >
            <FaQuoteLeft className="text-3xl text-blue-500 absolute top-6 left-6" />
            <p className="text-lg text-gray-700 italic leading-relaxed z-10 relative">
              “{testimonials[current].quote}”
            </p>
            <div className="mt-6 flex flex-col items-center gap-2">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <p className="font-semibold text-gray-800">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[current].position}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
