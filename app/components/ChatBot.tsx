"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";

type MessageLink = {
  text: string;
  url: string;
};

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
  links: MessageLink[];
};

type QAItem = {
  question: string;
  answer: string;
  keywords: string[];
  links: MessageLink[];
};

export const qaList: QAItem[] = [
  {
    question: "What services does Powerhouse Tech Solutions offer?",
    answer:
      "We provide web development, mobile app development, SaaS solutions, and custom CRM systems.",
    keywords: ["services", "web development", "mobile app", "saas", "crm"],
    links: [
      { text: "Our Services", url: "/services" },
      { text: "Web Development", url: "/web-development" },
      { text: "Mobile App Development", url: "/mobile-apps" },
    ],
  },
  {
    question: "Do you build warehouse management CRMs?",
    answer:
      "Yes! We develop advanced warehouse management CRMs tailored to your business needs.",
    keywords: ["warehouse", "management", "crm"],
    links: [{ text: "CRM Solutions", url: "/crm-solutions" }],
  },
  {
    question: "Can you build a SaaS product for my business?",
    answer:
      "Absolutely. We specialize in SaaS product development using scalable technologies.",
    keywords: ["saas", "product", "software"],
    links: [{ text: "SaaS Development", url: "/saas-development" }],
  },
  {
    question: "How can I contact Powerhouse Tech Solutions?",
    answer:
      "You can email us at contact@powerhousetechsolutions.com or use our website's contact form.",
    keywords: ["contact", "email", "support"],
    links: [{ text: "Contact Us", url: "/contact" }],
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi there! I'm your Powerhouse assistant. Ask me about our services, CRMs, or SaaS solutions!",
      links: [],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Show tooltip after 5 seconds if chat isn't open
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]); // Reset timer when chat opens/closes

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { sender: "user", text: input, links: [] };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const inputLower = input.toLowerCase();
    let matchedResponse: QAItem | null = null;

    // Check for direct keyword matches first
    qaList.forEach((item) => {
      if (
        item.keywords.some((keyword) =>
          inputLower.includes(keyword.toLowerCase())
        )
      ) {
        matchedResponse = item;
      }
    });

    // If no keyword match, check question similarity
    if (!matchedResponse) {
      matchedResponse =
        qaList.find((item) =>
          inputLower.includes(item.question.toLowerCase().split(" ")[0])
        ) ?? null; // Add null coalescing to convert undefined to null
    }

    const botReply: ChatMessage = matchedResponse
      ? {
          sender: "bot",
          text: matchedResponse.answer,
          links: matchedResponse.links,
        }
      : {
          sender: "bot",
          text: "Sorry, I couldn't find an answer to that. Please contact us directly at contact@powerhousetechsolutions.com!",
          links: [{ text: "Contact Page", url: "/contact" }],
        };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 800);
  };

  const quickQuestions = [
    "What services do you offer?",
    "Do you build CRMs?",
    "Can you build SaaS products?",
    "How can I contact you?",
  ];

  return (
    <div className="fixed bottom-4 right-5 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <div className="relative">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3"
                onMouseEnter={() => setShowTooltip(false)}
              >
                <div className="bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-md border border-gray-200 whitespace-nowrap">
                  Need help? Ask me anything!
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-200" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => {
              setIsOpen(true);
              setShowTooltip(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowTooltip(false)}
            className="p-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-2xl transition-colors relative"
          >
            <MessageCircle size={20} />
          </motion.button>
        </div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="w-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col"
            style={{ height: "560px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">Powerhouse Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-amber-600/30 p-1 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 ${
                      msg.sender === "bot"
                        ? "bg-amber-50 text-gray-800 rounded-bl-none"
                        : "bg-amber-600 text-white rounded-br-none"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {msg.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center text-sm ${
                              msg.sender === "bot"
                                ? "text-amber-600 hover:text-amber-700"
                                : "text-amber-200 hover:text-white"
                            } hover:underline`}
                          >
                            <ChevronRight size={14} className="mr-1" />
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-amber-50 text-gray-800 rounded-2xl rounded-bl-none p-3 max-w-[85%]">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-gray-500 mb-1">
                  TRY ASKING ABOUT:
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(q);
                        setTimeout(() => {
                          document.querySelector("input")?.focus();
                        }, 0);
                      }}
                      className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Ask about our services..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`p-2 rounded-full ${
                    input.trim()
                      ? "bg-amber-500 text-white hover:bg-amber-600"
                      : "bg-gray-200 text-gray-400"
                  } transition`}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">
                Powerhouse Tech Solutions © {new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
