"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "CoachDost.com",
    description:
      "A comprehensive platform connecting coaches and clients with features like booking, payments, and video sessions.",
    tech: ["React.js", "MongoDB", "Node.js", "Express"],
    link: "https://www.coachdost.com",
    year: "2025",
    image: "/images/coachdost.png",
  },
  {
    title: "Rudra Arts & Handicrafts",
    description:
      "E-commerce platform for traditional Indian historical art and handicrafts, featuring a user-friendly interface.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    year: "2025",
    image: "/images/rudraarts.png",
  },
  {
    title: "SyrenSynth Labs",
    description:
      "An innovative website showcasing their cutting-edge solutions.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "#",
    year: "2025",
    image: "/images/syrensynth.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#FBF8EF] text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
            Our{" "}
            <span className="relative z-10">
              Work That Speaks
              <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md z-[-1]"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world solutions we've crafted to scale, solve, and shine.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`flex flex-col-reverse md:flex-row ${
                  !isEven ? "md:flex-row-reverse" : ""
                } items-center gap-8 md:gap-16`}
              >
                {/* Content */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center text-blue-600 mt-4 hover:underline"
                    >
                      View Project <FiExternalLink className="ml-2" />
                    </a>
                  )}
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                  <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-lg group">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute top-4 right-4 bg-white text-xs text-gray-800 px-2 py-1 rounded shadow-md font-medium">
                      {project.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
