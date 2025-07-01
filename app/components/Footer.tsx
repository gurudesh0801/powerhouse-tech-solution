"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#fff2e4] pt-16 pb-8 overflow-hidden border-t border-amber-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500 rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-500 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              Contact Us
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-amber-600 mt-1" />
                <p className="text-gray-700">Pune, Maharashtra, India</p>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="text-amber-600 mt-1" />
                <a
                  href="mailto:com.projectpowerhouse@gmail.com"
                  className="text-gray-700 hover:text-amber-600 transition"
                >
                  com.projectpowerhouse@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-amber-600 mt-1" />
                <p className="text-gray-700">+91 87880 98130</p>
              </div>
            </div>

            {/* Mini Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-amber-200 shadow-sm h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7512.456317107!2d73.80597215!3d18.452682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eabb0e6e5b0b%3A0x1234567890abcdef!2sAbasaheb%20Raikar%20Nagar%2C%20Dhayari%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1720119584325!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800">Company</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="#" className="hover:text-amber-600 transition">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600 transition">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600 transition">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600 transition">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-800">Support</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="#" className="hover:text-amber-600 transition">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600 transition">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600 transition">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Policies Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              Policies
            </h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block p-4 bg-white rounded-lg border border-amber-100 hover:border-amber-300 transition group"
              >
                <h4 className="font-medium text-gray-800 group-hover:text-amber-600 transition">
                  Terms & Conditions
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Read our terms of service and legal policies
                </p>
              </a>

              <a
                href="#"
                className="block p-4 bg-white rounded-lg border border-amber-100 hover:border-amber-300 transition group"
              >
                <h4 className="font-medium text-gray-800 group-hover:text-amber-600 transition">
                  Privacy Policy
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  How we collect and protect your data
                </p>
              </a>

              <a
                href="#"
                className="block p-4 bg-white rounded-lg border border-amber-100 hover:border-amber-300 transition group"
              >
                <h4 className="font-medium text-gray-800 group-hover:text-amber-600 transition">
                  Refund Policy
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Our policies regarding payments and refunds
                </p>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-100 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-100 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-100 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-100 transition"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Powerhouse Tech Solutions. All
              rights reserved.
            </p>

            {/* Creative Element */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
