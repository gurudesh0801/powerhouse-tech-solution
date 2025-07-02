"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "react-feather";

const features = [
  "Custom Web Development",
  "Mobile Application Development",
  "SaaS Application Development",
  "Responsive UI/UX Design",
];

export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#f9f7f5] overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.1]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 bg-white p-1 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/82c99369809315.5b8e868317cb1.jpg"
                alt="Technology dashboard"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-100 rounded-xl shadow-lg border border-amber-200/50 transform rotate-6 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-yellow-100 rounded-xl shadow-lg border border-yellow-200/50 transform -rotate-3 z-0"></div>

            {/* Stats badge - Adjusted position */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute border-bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="relative w-6 h-6">
                        <img
                          src={`/avatars/avatar${item}.png`}
                          alt="Team member"
                          className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900">
                    50+ Projects
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-left px-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              Built for growth-focused businesses
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Innovative</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
              </span>{" "}
              <span className="text-amber-600">Tech Solutions</span> for Modern
              Businesses
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              We deliver cutting-edge technology solutions that drive growth,
              efficiency, and competitive advantage for businesses worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <CheckCircle
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-800">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="flex items-center px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 group">
                Explore Our Services
                <ChevronRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
              <button className="px-6 py-3.5 bg-transparent border-2 border-gray-300 hover:border-amber-400 text-gray-700 hover:text-amber-600 font-medium rounded-lg transition-all duration-300">
                Meet Our Team
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
