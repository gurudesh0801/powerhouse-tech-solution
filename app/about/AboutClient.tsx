"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle,
  ChevronRight,
  Users,
  Globe,
  Award,
  Code,
} from "react-feather";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const features = [
  "AI-powered business solutions",
  "Enterprise-grade security",
  "24/7 technical support",
  "Scalable cloud infrastructure",
];

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "CEO & Founder",
    image: "/avatars/avatar1.png",
    bio: "Visionary leader with 15+ years in tech innovation",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Priya Patel",
    role: "CTO",
    image: "/avatars/avatar3.png",
    bio: "Tech architect specializing in scalable systems",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Amit Singh",
    role: "Lead Developer",
    image: "/avatars/avatar2.png",
    bio: "Full-stack wizard with security expertise",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Nitin Gupta",
    role: "UX Director",
    image: "/avatars/avatar1.png",
    bio: "User experience strategist and design thinker",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
];

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f9f7f5]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 md:pt-20">
        {/* Background elements */}
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
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-600 rounded-xl shadow-lg border border-amber-200/50 transform rotate-6 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-yellow-200 rounded-xl shadow-lg border border-yellow-200/50 transform -rotate-3 z-0"></div>
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
                We build what your business needs
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="relative inline-block">
                  <span className="relative z-10">About</span>
                  <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
                </span>{" "}
                <span className="text-amber-600">Powerhouse</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Pioneering technology solutions that transform businesses and
                drive digital innovation forward.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/services">
                  <button className="flex items-center px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 group">
                    Explore Our Services
                    <ChevronRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                </Link>
                <button className="px-6 py-3.5 bg-transparent border-2 border-gray-300 hover:border-amber-400 text-gray-700 hover:text-amber-600 font-medium rounded-lg transition-all duration-300">
                  Meet Our Team
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              Our Journey
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-amber-600">Building</span> The Future{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Together</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600">
                Founded in 2024, Powerhouse Tech Solutions is a dynamic startup
                driven by a passionate team of technologists committed to
                delivering impactful IT solutions tailored for modern
                businesses.
              </p>
              <p className="text-lg text-gray-600">
                With innovation at our core, we aim to become one of India's
                most trusted software agencies by helping organizations of all
                sizes accelerate their digital transformation journey with
                scalable, efficient, and future-ready technologies.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <p className="text-3xl font-bold text-amber-600">
                      {stat.value}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-1 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Our team working"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-yellow-100 rounded-xl shadow-lg border border-yellow-200/50 transform -rotate-3 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Values</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every
              solution we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f9f7f5] p-8 rounded-xl border border-amber-100"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                People First
              </h3>
              <p className="text-gray-600">
                We believe technology should serve people, not the other way
                around. Our solutions are designed with real users in mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#f9f7f5] p-8 rounded-xl border border-amber-100"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Impact
              </h3>
              <p className="text-gray-600">
                We build solutions that transcend borders, creating technology
                that works for diverse cultures and markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f9f7f5] p-8 rounded-xl border border-amber-100"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technical Excellence
              </h3>
              <p className="text-gray-600">
                We push boundaries with cutting-edge technology while
                maintaining robust, secure, and scalable architectures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="relative py-20 bg-[#f9f7f5] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              Meet The Team
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-amber-600">Minds</span> Behind The{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Magic</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience
              across multiple disciplines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
             
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-white text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
                        >
                          <FaLinkedin size={14} />
                        </a>
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
                        >
                          <FaInstagram size={14} />
                        </a>
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
                        >
                          <FaFacebookF size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-amber-600 mb-4">{member.role}</p>
                    </div>

                    
                    <div className="mt-auto flex space-x-3 md:hidden pt-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
                      >
                        <FaLinkedin size={14} />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
                      >
                        <FaInstagram size={14} />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
                      >
                        <FaFacebookF size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-2 -right-2 w-full h-full rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-20 bg-amber-600 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-[80px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our solutions can drive your success
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="flex items-center px-8 py-3.5 bg-white text-amber-600 hover:bg-gray-100 font-medium rounded-lg transition-all duration-300 group">
              Get Started
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
            <button className="px-8 py-3.5 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
