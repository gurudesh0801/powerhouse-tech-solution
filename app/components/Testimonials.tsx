"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#f9f7f5] py-24 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-800 bg-amber-100 rounded-full mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Client Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">Trusted</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
            </span>{" "}
            <span className="text-amber-600">By Industry Leaders</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear what our clients say about working with our team
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-amber-50 text-amber-600 transition-all"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-amber-50 text-amber-600 transition-all"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial cards */}
          <div className="relative h-96">
            <AnimatePresence custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-xl shadow-md p-8 md:p-12 flex flex-col items-center"
              >
                <FaQuoteLeft className="text-3xl text-amber-500 mb-6" />
                <p className="text-lg text-gray-700 italic leading-relaxed text-center mb-8">
                  "{testimonials[current].quote}"
                </p>

                <div className="mt-auto flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white">
                      {current + 1}
                    </div>
                  </div>
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

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-amber-600 w-6" : "bg-amber-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
