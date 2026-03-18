"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className = "", id, containerClassName = "" }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 overflow-hidden ${className}`}
    >
      <div className={`container mx-auto px-4 md:px-6 max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = false 
}: { 
  title: string | ReactNode; 
  subtitle?: string; 
  centered?: boolean 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : ""}`}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 font-outfit">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
