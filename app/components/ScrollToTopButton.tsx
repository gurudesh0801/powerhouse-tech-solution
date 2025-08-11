"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "918788098130"; // ← Replace with your number
  const whatsappMessage = encodeURIComponent(
    "Hi! I’d like to inquire about your IT services."
  );

  return (
    <>
      <AnimatePresence>
        {show && (
          <>
            {/* WhatsApp Button */}
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-30 right-5 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
              aria-label="WhatsApp Inquiry"
            >
              <FaWhatsapp size={20} />
            </motion.a>

            {/* Scroll-to-top Button */}
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              onClick={scrollToTop}
              className="fixed bottom-17 right-5 z-50 p-3 rounded-full  bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-2xl transition-colors"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
