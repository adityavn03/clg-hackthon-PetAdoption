"use client";

import { Bell, Search, User, Moon, Sun, Shield } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function AdminHeader({ title }: { title: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    fetch("/api/auth/me")
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, []);

  if (!mounted) return null;

  return (
    <header className="h-20 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 px-8 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-black text-gray-900 dark:text-white font-outfit uppercase tracking-tight">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="hidden md:flex relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search dashboard..."
            className="pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
          />
        </div>

        <div className="flex items-center gap-4 border-l border-gray-100 dark:border-gray-800 pl-6">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-500 hover:text-purple-500 transition-all border border-gray-100 dark:border-gray-800"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button className="relative p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-500 hover:text-purple-500 transition-all border border-gray-100 dark:border-gray-800">
            <Bell size={18} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
          </button>

          <div className="flex items-center gap-3 ml-2 group cursor-pointer">
             <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">{user?.username || "Admin"}</p>
                <p className="text-[10px] font-bold text-purple-600 uppercase">Administrator</p>
             </div>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-red-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shadow-sm transition-transform group-hover:scale-105">
                <Shield size={20} />
             </div>
          </div>
        </div>
      </div>
    </header>
  );
}
