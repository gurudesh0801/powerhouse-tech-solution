"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiGlobe,
  FiPenTool,
  FiImage,
  FiBriefcase,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode size={28} />,
    title: "Custom Software Development",
    description:
      "Modern, scalable software tailored to your specific business needs.",
  },
  {
    icon: <FiSmartphone size={28} />,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications that deliver performance and usability.",
  },
  {
    icon: <FiGlobe size={28} />,
    title: "Website & Web App Development",
    description:
      "Responsive websites and web apps built with the latest frontend and backend technologies.",
  },
  {
    icon: <FiPenTool size={28} />,
    title: "UI/UX Design (Figma, Illustrator, Photoshop)",
    description:
      "Interactive and user-centric designs using modern tools for seamless user experiences.",
  },
  {
    icon: <FiImage size={28} />,
    title: "Graphic Design",
    description:
      "Creative branding, marketing assets, and visuals that communicate and inspire.",
  },
  {
    icon: <FiBriefcase size={28} />,
    title: "Business Consultation",
    description:
      "Strategic tech and digital consulting to boost business performance and innovation.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#F5EEDC] text-gray-800" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="relative z-10">
              Core Services
              <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md z-[-1]"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scalable solutions, expert insights, and cutting-edge technology
            tailored to your business success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
