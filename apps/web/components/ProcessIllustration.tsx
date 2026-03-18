// I will use Lucide icons for now.
"use client";

import { motion } from "framer-motion";
import { Search, FileText, Home, ArrowRight } from "lucide-react";

export function ProcessIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-brand-primary/30 rounded-full blur-3xl"
      />
      <div className="relative z-10 grid grid-cols-2 gap-4 h-full content-center">
        <StepIcon icon={<Search />} delay={0} label="Browse" color="bg-brand-primary" />
        <StepIcon icon={<FileText />} delay={0.2} label="Analyze" color="bg-accent-purple" />
        <StepIcon icon={<Home />} delay={0.4} label="Approve" color="bg-brand-secondary" />
        <StepIcon icon={<ArrowRight />} delay={0.6} label="Adopt" color="bg-gray-900" />
      </div>
    </div>
  );
}

function StepIcon({ icon, delay, label, color }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center gap-2"
    >
      <div className={`w-20 h-20 rounded-2xl ${color} text-white flex items-center justify-center shadow-2xl`}>
        {icon}
      </div>
      <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">{label}</span>
    </motion.div>
  );
}
