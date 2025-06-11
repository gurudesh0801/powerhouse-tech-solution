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
      className="relative py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-100 overflow-hidden"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Let’s Talk About Your Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 max-w-xl mx-auto"
        >
          Whether you have an idea, a question, or want to partner with us —
          drop your email and a message. Let’s start the conversation.
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
            className="w-full sm:w-[420px] px-6 py-3 rounded-md shadow-md focus:outline-none border border-gray-300 focus:border-blue-500 transition-all duration-300"
          />

          <textarea
            placeholder="Tell us more about your project or idea..."
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full sm:w-[420px] px-6 py-3 rounded-md shadow-md focus:outline-none border border-gray-300 focus:border-blue-500 transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            disabled={!email || !message || submitted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center gap-2 disabled:opacity-50"
          >
            {submitted ? "Sent!" : "Let’s Talk"}
            {!submitted && <FiSend />}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
