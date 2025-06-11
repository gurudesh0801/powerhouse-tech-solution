"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-16"
        >
          {/* Column 1 - Logo & Summary */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Powerhouse Tech Solutions
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Delivering innovative, scalable, and future-ready IT solutions to
              help businesses thrive in a digital world.
            </p>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="flex items-start gap-2 mb-3">
              <FiMail className="mt-1 text-blue-400" /> hello@powerhouse.tech
            </p>
            <p className="flex items-start gap-2 mb-3">
              <FiPhone className="mt-1 text-blue-400" /> +91 87880 98130 / 86684
              94091
            </p>
            <p className="flex items-start gap-2">
              <FiMapPin className="mt-1 text-blue-400" />
              Pune, Maharashtra, India
            </p>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-white"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/projectpowerhouse/"
                target="_blank"
                className="hover:text-white"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/projectpowerhouseofficial/"
                target="_blank"
                className="hover:text-white"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Powerhouse Tech Solutions. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
