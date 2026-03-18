"use client";

import { Sidebar } from "./Sidebar";
import { AdminHeader } from "./AdminHeader";
import { motion } from "framer-motion";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex transition-colors duration-500">
      <Sidebar />
      <div className="flex-1 ml-20 lg:ml-[280px] transition-all duration-300">
        <AdminHeader title={title} />
        <motion.main 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 max-w-7xl mx-auto"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
