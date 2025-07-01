"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    color: "from-indigo-500/10 to-blue-600/10",
  },
  {
    icon: <FiSmartphone size={28} />,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications that deliver performance and usability.",
    color: "from-cyan-500/10 to-teal-600/10",
  },
  {
    icon: <FiGlobe size={28} />,
    title: "Website & Web App Development",
    description:
      "Responsive websites and web apps built with the latest frontend and backend technologies.",
    color: "from-blue-500/10 to-indigo-600/10",
  },
  {
    icon: <FiPenTool size={28} />,
    title: "UI/UX Design (Figma, Illustrator, Photoshop)",
    description:
      "Interactive and user-centric designs using modern tools for seamless user experiences.",
    color: "from-violet-500/10 to-purple-600/10",
  },
  {
    icon: <FiImage size={28} />,
    title: "Graphic Design",
    description:
      "Creative branding, marketing assets, and visuals that communicate and inspire.",
    color: "from-fuchsia-500/10 to-pink-600/10",
  },
  {
    icon: <FiBriefcase size={28} />,
    title: "Business Consultation",
    description:
      "Strategic tech and digital consulting to boost business performance and innovation.",
    color: "from-amber-500/10 to-orange-600/10",
  },
];

export default function Services() {
  return (
    <section className="relative py-28 overflow-hidden" id="services">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f7f5] to-[#f0ece4] overflow-hidden">
        {/* Animated grid overlay */}
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

        {/* Floating gradient spheres */}
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
          className="absolute -left-20 -top-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full filter blur-3xl"
        ></motion.div>

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
          className="absolute -right-40 bottom-1/3 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full filter blur-3xl"
        ></motion.div>

        {/* Subtle particle animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gray-400/10"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.1, 0.25, 0.3, 1],
          }}
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
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white/80 border border-white/80 rounded-full backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Our Premium Services
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
              <span className="relative z-10">Transformative</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-gradient-to-r from-yellow-400/80 to-amber-400/80 -z-0"></span>
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We deliver cutting-edge technology services that drive innovation,
            efficiency, and growth for enterprises worldwide.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/90 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="h-full backdrop-blur-sm bg-white/50 rounded-2xl shadow-sm hover:shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300 p-8 flex flex-col">
                <div
                  className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${service.color} w-16 h-16 flex items-center justify-center backdrop-blur-sm`}
                >
                  <motion.div
                    whileHover={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.6 },
                    }}
                    className="text-white"
                  >
                    {service.icon}
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <motion.div
                  className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium text-gray-800 mb-6">
            Ready to transform your business?
          </h3>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-medium rounded-lg transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-amber-500/20"
            >
              <Link href="/services">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-gray-800/20 hover:border-gray-800/40 text-gray-800 hover:text-gray-900 font-medium rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              <Link href="/contact">Contact Sales</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
