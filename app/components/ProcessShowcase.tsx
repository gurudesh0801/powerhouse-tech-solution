"use client";

import { motion } from "framer-motion";
import { FaTools, FaRocket, FaBrain, FaLaptopCode } from "react-icons/fa";
import type { ReactElement } from "react";
import Link from "next/link";

const projects: {
  id: number;
  icon: ReactElement;
  title: string;
  subtitle: string;
  result: string;
  color: string;
  accent: string;
}[] = [
  {
    id: 1,
    icon: <FaBrain size={24} />,
    title: "Discovery & Strategy",
    subtitle: "Deep dive to define goals, scope, and audience.",
    result: "Strategic clarity that shaped the product roadmap.",
    color: "bg-amber-50",
    accent: "text-amber-600",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={24} />,
    title: "Custom Development",
    subtitle: "Robust backend & intuitive frontend development.",
    result: "95% uptime and scalable architecture in production.",
    color: "bg-orange-50",
    accent: "text-orange-600",
  },
  {
    id: 3,
    icon: <FaTools size={24} />,
    title: "Integration & Automation",
    subtitle: "APIs, CI/CD pipelines, and real-time data syncing.",
    result: "Reduced manual effort by 60% through automation.",
    color: "bg-yellow-50",
    accent: "text-yellow-600",
  },
  {
    id: 4,
    icon: <FaRocket size={24} />,
    title: "Launch & Growth",
    subtitle: "SEO, analytics, A/B testing, and cloud deployment.",
    result: "3x client acquisition post-launch.",
    color: "bg-amber-100",
    accent: "text-amber-700",
  },
];

export default function ProcessShowcase() {
  return (
    <section className="relative py-24 bg-[#f9f7f5]" id="process">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-800 bg-amber-100 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              Our Proven Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="relative inline-block">
              <span className="relative z-10">The Powerhouse</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
            </span>{" "}
            <span className="text-amber-600">Method</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            A systematic approach that delivers exceptional results through
            every phase of development.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-amber-200 -translate-x-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {projects.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-amber-500 z-10 hidden lg:block"></div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative group overflow-hidden ${step.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 h-full flex flex-col border border-white`}
                >
                  {/* Icon */}
                  <div className={`${step.accent} mb-6`}>{step.icon}</div>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-sm font-medium text-amber-600">
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-5">{step.subtitle}</p>
                    <div
                      className={`p-3 rounded-lg bg-white border border-amber-100`}
                    >
                      <p className={`text-sm font-medium ${step.accent}`}>
                        <span className="font-bold">Result:</span> {step.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium text-gray-800 mb-8">
            Ready to implement our proven process for your project?
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services">
              <motion.button
                whileHover={{ y: -2, backgroundColor: "#d97706" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-amber-600 text-white font-medium rounded-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white border border-amber-300 text-gray-800 font-medium rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
