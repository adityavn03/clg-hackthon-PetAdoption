"use client";

import { motion } from "framer-motion";
import { Heart, Send, Share2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ActionButtonsProps {
  petId: string;
  isAvailable: boolean;
}

export function ActionButtons({ petId, isAvailable }: ActionButtonsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 pt-10 sticky bottom-8 z-30 md:static">
      <Link 
        href={`/apply?petId=${petId}`}
        className={`flex-1 ${!isAvailable && 'pointer-events-none opacity-50'}`}
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-5 rounded-[2rem] bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-lg uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 group transition-all"
        >
          Apply to Adopt
          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </Link>

      <div className="flex gap-3">
         <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all ${
               isFavorite 
               ? "bg-red-500 text-white shadow-lg shadow-red-500/20 shadow-inner" 
               : "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-400 hover:text-red-500 hover:border-red-500/30 shadow-sm"
            }`}
         >
            <Heart size={24} fill={isFavorite ? "currentColor" : "none"} strokeWidth={isFavorite ? 0 : 2.5} />
         </motion.button>

         <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-400 hover:text-brand-primary hover:border-brand-primary/30 flex items-center justify-center transition-all shadow-sm relative group"
         >
            {isShared ? (
               <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap"
               >
                  Copied!
               </motion.span>
            ) : null}
            <Share2 size={24} strokeWidth={2.5} />
         </motion.button>
      </div>
    </div>
  );
}
