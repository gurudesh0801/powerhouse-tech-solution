"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="bg-[#f9f7f5]">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Contact Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Let's Build</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
            </span>{" "}
            <span className="text-amber-600">Something Great</span> Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have a project in mind or want to learn more about our services?
            Reach out to our team—we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiSend className="text-amber-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message <FiSend />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Within 24hrs Response
                    </h3>
                    <p className="text-gray-600">
                      We pride ourselves on quick responses. Expect to hear back
                      from our team within one business day.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Our Locations
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600 mt-1">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Headquarters
                      </h4>
                      <p className="text-gray-600">
                        123 Tech Park, Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600 mt-1">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Development Center
                      </h4>
                      <p className="text-gray-600">
                        456 Innovation Drive, Bangalore, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 h-48 rounded-xl overflow-hidden">
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

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Other Ways to Connect
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <p className="text-gray-600">Email us at</p>
                      <a
                        href="mailto:com.projectpowerhouse@gmail.com"
                        className="font-medium text-gray-900 hover:text-amber-600 transition-colors"
                      >
                        com.projectpowerhouse@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <p className="text-gray-600">Call us at</p>
                      <a
                        href="tel:+918788098130"
                        className="font-medium text-gray-900 hover:text-amber-600 transition-colors"
                      >
                        +91 87880 98130
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <FaLinkedin size={18} />
                    </div>
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <FaTwitter size={18} />
                    </div>
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <FaInstagram size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto"
          >
            Schedule a free consultation with our experts to discuss your
            requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="flex items-center px-8 py-3.5 bg-white text-amber-600 hover:bg-gray-100 font-medium rounded-lg transition-all duration-300 group">
              Book a Call
              <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
              Email Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
