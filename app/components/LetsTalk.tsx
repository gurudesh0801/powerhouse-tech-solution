"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function LetsTalk() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setSubmitted(true);

    // Add your API logic here (e.g., POST email/message to server)

    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className="relative bg-[#f9f7f5] py-24 overflow-hidden"
      id="contact"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.1]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-800 bg-amber-100 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Get In Touch
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          <span className="relative inline-block">
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-200/70 -z-0"></span>
          </span>{" "}
          <span className="text-amber-600">About Your Project</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 max-w-xl mx-auto"
        >
          Whether you have an idea, a question, or want to partner with us —
          drop your email and a message. Let's start the conversation.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[420px] px-6 py-3 rounded-lg shadow-sm focus:outline-none border border-gray-200 focus:border-amber-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
          />

          <textarea
            placeholder="Tell us more about your project or idea..."
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full sm:w-[420px] px-6 py-3 rounded-lg shadow-sm focus:outline-none border border-gray-200 focus:border-amber-400 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
          />

          <motion.button
            type="submit"
            disabled={!email || !message || submitted}
            whileHover={!submitted ? { y: -2 } : {}}
            whileTap={!submitted ? { scale: 0.98 } : {}}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {submitted ? "Message Sent!" : "Let's Talk"}
            {!submitted && (
              <FiSend className="group-hover:translate-x-1 transition-transform" />
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
