"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../ImageWithFallback";

export function FeaturedPet({ pet }: { pet: any }) {
  if (!pet) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-[3rem] overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl mb-20"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Side */}
        <div className="relative aspect-video lg:aspect-auto h-full min-h-[400px]">
          {pet.media?.[0]?.url ? (
            <ImageWithFallback 
              src={pet.media[0].url} 
              alt={pet.name} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          ) : (
             <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-8xl">🐾</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:bg-gradient-to-r" />
          
          <div className="absolute top-8 left-8 z-10 flex gap-3">
             <div className="px-4 py-2 rounded-full bg-brand-primary text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-xl">
                <Star size={14} fill="white" />
                Featured Pet
             </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="p-12 md:p-16 flex flex-col justify-center relative">
          {/* Abstract background spark */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-xs mb-4">
              <Sparkles size={16} />
              Meet our star of the week
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase font-outfit mb-6 leading-none">
              {pet.name}
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-10 max-w-lg leading-relaxed">
              {pet.description || "A wonderful companion waiting for a forever home. Friendly, energetic, and full of love."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/pets/${pet.id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-white text-gray-900 font-black text-lg shadow-xl flex items-center justify-center gap-2 group"
                >
                  View Full Profile
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <button className="px-8 py-4 rounded-2xl bg-gray-800 text-white font-black text-lg border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                <Heart size={20} className="text-brand-primary" />
                Favorite
              </button>
            </div>
            
            <div className="mt-12 flex gap-12 border-t border-gray-800 pt-8">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Breed</p>
                  <p className="text-lg font-bold text-white uppercase">{pet.breed || "Mixed"}</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Age</p>
                  <p className="text-lg font-bold text-white uppercase">{pet.ageMonths ? `${Math.floor(pet.ageMonths / 12)} Years` : "Unknown"}</p>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Location</p>
                  <p className="text-lg font-bold text-white uppercase">{pet.shelter?.city || "Remote"}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
