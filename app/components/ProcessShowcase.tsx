"use client";

import { motion } from "framer-motion";
import { FaTools, FaRocket, FaBrain, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    id: 1,
    icon: <FaBrain size={28} className="text-blue-600" />,
    title: "Discovery & Strategy",
    subtitle: "Deep dive to define goals, scope, and audience.",
    result: "Strategic clarity that shaped the product roadmap.",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={28} className="text-green-600" />,
    title: "Custom Software Development",
    subtitle:
      "Robust backend & intuitive frontend using React.js/Next.js + PostgreSQL/MongoDB.",
    result: "95% uptime and scalable architecture in production.",
  },
  {
    id: 3,
    icon: <FaTools size={28} className="text-yellow-600" />,
    title: "Integration & Automation",
    subtitle: "APIs, CI/CD pipelines, and real-time data syncing.",
    result: "Reduced manual effort by 60% through automation.",
  },
  {
    id: 4,
    icon: <FaRocket size={28} className="text-purple-600" />,
    title: "Launch & Growth",
    subtitle: "SEO, analytics, A/B testing, and cloud deployment.",
    result: "3x client acquisition post-launch.",
  },
];

export default function ProcessShowcase() {
  return (
    <section className="py-24 bg-gray-50" id="process">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          The{" "}
          <span className="relative z-10">
            <span className="relative z-10">
              Powerhouse Method
              <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md z-[-1]"></span>
            </span>
            <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md z-[-1]"></span>
          </span>
        </motion.h2>

        <div className="space-y-16">
          {projects.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`md:flex items-center gap-10 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon & Line */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-4 mb-6 md:mb-0">
                <div className="bg-white shadow-md p-4 rounded-full">
                  {step.icon}
                </div>
                {index < projects.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
                )}
              </div>

              {/* Text Block */}
              <div className="md:w-2/3 bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.subtitle}</p>
                <p className="mt-4 text-sm text-gray-500 italic">
                  Outcome: {step.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
