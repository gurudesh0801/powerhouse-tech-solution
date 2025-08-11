// app/admin/dashboard/layout.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? "80px" : "240px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white shadow-md flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && <span className="font-bold text-lg">Dashboard</span>}
        </div>

        <nav className="flex-1 p-2">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-200 rounded">
              🏠 {!collapsed && "Home"}
            </li>
            <li className="p-2 hover:bg-gray-200 rounded">
              📊 {!collapsed && "Analytics"}
            </li>
            <li className="p-2 hover:bg-gray-200 rounded">
              ⚙️ {!collapsed && "Settings"}
            </li>
          </ul>
        </nav>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
          <h1 className="font-semibold text-lg">Admin Panel</h1>
          <div>User Menu</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
