"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Calendar, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../ImageWithFallback";
import { formatAgeMonths } from "../../lib/utils/format";
import { useState } from "react";

interface PetCardProps {
  pet: any; // Using any for now to simplify, ideally typed from Prisma
}

export function PetCard({ pet }: PetCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Link href={`/pets/${pet.id}`}>
          <div className="absolute inset-0 z-10 group-hover:scale-110 transition-transform duration-700 ease-out">
            {pet.media?.[0]?.url ? (
               <ImageWithFallback 
                src={pet.media[0].url} 
                alt={pet.name} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl">
                🐾
              </div>
            )}
          </div>
        </Link>
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <div className={`px-3 py-1 rounded-full backdrop-blur-md border text-[10px] font-black uppercase tracking-widest shadow-lg ${
            pet.status === "AVAILABLE" 
              ? "bg-green-500/20 border-green-500/30 text-green-600 dark:text-green-400" 
              : "bg-orange-500/20 border-orange-500/30 text-orange-600 dark:text-orange-400"
          }`}>
            {pet.status}
          </div>
          <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
            {pet.species}
          </div>
        </div>

        {/* Favorite Button */}
        <button 
          onClick={(e) => { e.preventDefault(); setIsFavorite(!isFavorite); }}
          className={`absolute top-4 right-4 z-20 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
            isFavorite 
              ? "bg-brand-primary border-brand-primary text-white scale-110 shadow-lg shadow-brand-primary/40" 
              : "bg-black/20 border-white/20 text-white hover:bg-white hover:text-brand-primary hover:border-white"
          }`}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase font-outfit tracking-tight leading-none">
            {pet.name}
          </h3>
          <span className="text-brand-primary font-bold text-sm">
             {pet.breed || "Mixed Breed"}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
            <Calendar size={14} className="text-brand-primary" />
            {formatAgeMonths(pet.ageMonths)}
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
            <MapPin size={14} className="text-brand-primary" />
            {pet.shelter?.city || "Local Shelter"}
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/pets/${pet.id}`} className="flex-1">
            <button className="w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm shadow-lg hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-2 group/btn">
              View Details
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
          <button className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
            <Info size={18} />
          </button>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
