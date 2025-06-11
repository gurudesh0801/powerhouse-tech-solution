"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "react-feather";

const features: string[] = [
  "Experienced team of developers & strategists",
  "Customized, scalable solutions",
  "Strong commitment to client satisfaction",
  "End-to-end support from idea to deployment",
];

export default function About() {
  return (
    <section
      className="py-20 bg-white text-gray-800 relative z-10 scroll-mt-20"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-outfit font-bold text-gray-900">
            About{" "}
            <span className="relative z-10">
              Powerhouse Tech Solutions
              <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md z-[-1]" />
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We empower businesses with modern IT solutions, intuitive software,
            and robust cloud infrastructure — all tailored to help you lead and
            innovate.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide cutting-edge IT solutions that help businesses grow,
              adapt, and lead. We prioritize performance, scalability, and
              real-world impact with everything we build.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-6">Why Choose Us?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg p-4 flex items-start space-x-3 shadow-sm"
                >
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-800 text-sm">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/aboutImage.png"
              alt="Team collaboration at Powerhouse Tech Solutions"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
