"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink } from "react-feather";

const projects = [
  {
    title: "E-Learning Platform",
    description: "A scalable online E-Learning Platform",
    image: "/images/coachdost.png",
    link: "https://coachdost.com",
  },
  {
    title: "Rudra Arts",
    description:
      "Interactive patient monitoring and data visualization system.",
    image: "/images/rudraarts.png",
    link: "#",
  },
  {
    title: "SyrenSynth Labs",
    description: "Custom-built website with animations",
    image: "/images/syrensynth.png",
    link: "https://serensynthlabs.com/",
  },
  {
    title: "Fully Customize Hotel Booking Website",
    description: "Secure finance tracking and investment portfolio app.",
    image: "/images/hotel.png",
    link: "#",
  },
];

export default function Portfolio() {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            Our Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">Recent</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
            </span>{" "}
            <span className="text-amber-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore some of the cutting-edge projects we've delivered to our
            global clients.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-600 mb-3">
                  <Folder size={16} />
                  <span className="text-sm font-medium">Project</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                  whileHover={{ x: 2 }}
                >
                  View Project <ExternalLink className="ml-1" size={16} />
                </motion.a>
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
          <h3 className="text-2xl font-medium text-gray-800 mb-8">
            Want to see more of our work?
          </h3>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ y: -2, backgroundColor: "#d97706" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300"
            >
              View Full Portfolio
              <ExternalLink className="ml-2" size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
