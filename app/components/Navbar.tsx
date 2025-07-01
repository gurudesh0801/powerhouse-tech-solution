"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animated underline */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <img
                  src="/images/powerhouselogo.png"
                  alt="Powerhouse Digital Solutions"
                  className="h-10 transition-all duration-300 invert"
                />
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Animated Contact Button */}
              <motion.a
                href="tel:+1234567890"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(245, 158, 11, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg font-medium hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 shadow-md"
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    transition: { duration: 0.5, repeat: Infinity },
                  }}
                  className="mr-2"
                >
                  <FiPhone size={18} />
                </motion.div>
                Contact Us
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none"
              aria-label="Main menu"
            >
              {menuOpen ? (
                <FiX size={24} className="text-amber-600" />
              ) : (
                <FiMenu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu with glass morphism effect */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg shadow-xl"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="px-4 pt-2 pb-4 space-y-2"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-3 py-3 rounded-md text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors border-b border-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    <FiArrowRight className="text-amber-500" />
                  </Link>
                </motion.div>
              ))}

              <motion.a
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 },
                }}
                href="tel:+1234567890"
                className="flex items-center justify-center mt-4 px-4 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg font-medium hover:from-yellow-600 hover:to-amber-600 transition-colors"
              >
                <FiPhone className="mr-2" />
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
