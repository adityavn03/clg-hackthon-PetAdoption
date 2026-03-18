"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Dog, 
  FileText, 
  Home, 
  Settings, 
  LogOut, 
  ChevronLeft,
  Shield,
  Heart
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Pets", href: "/admin/pets", icon: Dog },
  { name: "Applications", href: "/admin/applications", icon: FileText },
  { name: "Shelters", href: "/admin/shelters", icon: Home },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div 
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="fixed left-0 top-0 bottom-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 flex flex-col transition-all duration-300"
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-red-600 flex items-center justify-center text-white shadow-lg">
              <Shield size={18} />
            </div>
            <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white font-outfit uppercase">
              Pet <span className="text-purple-600">Admin</span>
            </span>
          </Link>
        )}
        {isCollapsed && (
           <div className="w-8 h-8 mx-auto rounded-lg bg-gradient-to-br from-purple-600 to-red-600 flex items-center justify-center text-white shadow-lg">
            <Shield size={18} />
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1 mt-6">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all relative group ${
                  isActive 
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" 
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <item.icon size={20} className={isActive ? "text-white" : "text-gray-500 group-hover:text-purple-500 transition-colors"} />
                {!isCollapsed && <span className="font-bold text-sm tracking-tight">{item.name}</span>}
                
                {isActive && !isCollapsed && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute inset-0 bg-purple-600 rounded-xl z-[-1]"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-1">
        <Link href="/">
           <div className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all">
             <Heart size={20} />
             {!isCollapsed && <span className="font-bold text-sm tracking-tight">Main Site</span>}
           </div>
        </Link>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all"
        >
          <div className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}>
            <ChevronLeft size={20} />
          </div>
          {!isCollapsed && <span className="font-bold text-sm tracking-tight">Collapse</span>}
        </button>
      </div>
    </motion.div>
  );
}
