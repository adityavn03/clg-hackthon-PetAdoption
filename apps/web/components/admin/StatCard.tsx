"use client";

import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isUp: boolean;
  };
  color: string;
}

export function StatCard({ label, value, icon: Icon, trend, color }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background Icon Glow */}
      <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${color}`}>
        <Icon size={120} />
      </div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className={`p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 ${color.replace('text-', 'text-opacity-80')}`}>
          <Icon size={20} />
        </div>
        {trend && (
           <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest ${trend.isUp ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {trend.value}%
           </div>
        )}
      </div>

      <div className="relative z-10">
        <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-1">{label}</p>
        <h3 className="text-3xl font-black text-gray-900 dark:text-white font-outfit uppercase tracking-tighter">
           {value}
        </h3>
      </div>
    </motion.div>
  );
}
