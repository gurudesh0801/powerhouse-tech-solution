"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  const sphereVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const smallSphereVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, -15, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const gridVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Milky white background with subtle effects */}
      <div className="absolute inset-0 bg-[#f9f7f5] overflow-hidden">
        {/* Animated grid overlay */}
        <motion.div
          variants={gridVariants}
          animate="animate"
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </motion.div>

        {/* Floating spheres with warm colors */}
        <motion.div
          variants={sphereVariants}
          animate="animate"
          className="absolute -left-20 -top-20 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full filter blur-3xl"
        ></motion.div>

        <motion.div
          variants={smallSphereVariants}
          animate="animate"
          className="absolute -right-40 bottom-1/3 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full filter blur-3xl"
        ></motion.div>

        <motion.div
          variants={{
            animate: {
              y: [0, -40, 0],
              x: [0, 20, 0],
              transition: {
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          animate="animate"
          className="absolute right-1/4 top-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full filter blur-3xl"
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

      <div className="container mx-auto px-6 py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content - 3D card component with glass morphism */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="lg:w-1/2 relative order-1"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main glass card */}
              <div className="relative z-10 backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-2xl border border-white/80 transform -rotate-1 hover:rotate-0 transition-all duration-300">
                <div className="bg-gradient-to-br from-yellow-100/60 to-amber-100/60 p-6 rounded-xl mb-6 border border-white/80">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        Custom Web Application
                      </h3>
                      <p className="text-sm text-gray-600">
                        Next-gen solutions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["Next.js", "React.js", "Node.js", "MongoDB"].map((tech) => (
                    <div
                      key={tech}
                      className="bg-white/80 hover:bg-yellow-100/60 transition-all p-3 rounded-lg border border-white/80 backdrop-blur-sm"
                    >
                      <p className="font-medium text-gray-800">{tech}</p>
                      <p className="text-xs text-gray-500">Technology</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Featured project</p>
                    <p className="font-medium text-gray-800">
                      Enterprise Platform
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-white/80 hover:bg-white text-gray-800 rounded-lg text-sm font-medium transition-all backdrop-blur-sm border border-white/80">
                    View Case
                  </button>
                </div>
              </div>

              {/* Floating card elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200/60 rounded-xl shadow-lg border border-white/80 transform rotate-6 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-yellow-200/60 rounded-xl shadow-lg border border-white/80 transform -rotate-3 backdrop-blur-sm"></div>
            </div>
          </motion.div>

          {/* Right content - Text content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="lg:w-1/2 text-left order-2"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white/80 border border-white/80 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Empowering businesses with next-gen IT
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              <span className="relative inline-block">
                <span className="relative z-10">Powerhouse</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-gradient-to-r from-yellow-400/80 to-amber-400/80 -z-0"></span>
              </span>{" "}
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-10 max-w-lg"
            >
              We deliver cutting-edge technology solutions that drive
              innovation, efficiency, and growth for enterprises worldwide.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button className="relative px-8 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-medium rounded-lg transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-amber-500/20">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="px-8 py-3.5 bg-transparent border-2 border-gray-800/20 hover:border-gray-800/40 text-gray-800 hover:text-gray-900 font-medium rounded-lg transition-all duration-300 backdrop-blur-sm">
                Contact Our Team
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
