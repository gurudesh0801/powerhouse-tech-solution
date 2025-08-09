"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lock, User, ChevronRight } from "react-feather";
import { useState } from "react";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Logging in with:", { userId, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-[#f9f7f5] flex items-center justify-center p-4 pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Login Header */}
          <div className="bg-amber-600 p-8 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Welcome Back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-amber-100"
            >
              Sign in to your Powerhouse account
            </motion.p>
          </div>

          {/* Login Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <label htmlFor="userId" className="block text-gray-700 mb-2">
                  User ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="text-gray-400" size={18} />
                  </div>
                  <input
                    id="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="Enter your user ID"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="text-gray-400" size={18} />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-gray-600">
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  Forgot password?
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 group"
              >
                Sign In
                <ChevronRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Sign up
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-600 rounded-xl shadow-lg border border-amber-200/50 transform rotate-6 z-0 opacity-20"></div>
        <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-yellow-200 rounded-xl shadow-lg border border-yellow-200/50 transform -rotate-3 z-0 opacity-20"></div>
      </motion.div>
    </div>
  );
}
