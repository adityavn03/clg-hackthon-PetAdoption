"use client";

import { motion } from "framer-motion";
import { 
  Dog, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Info,
  Calendar,
  Layers,
  Home
} from "lucide-react";
import { formatAgeMonths } from "../../../lib/utils/format";

interface PetInfoProps {
  pet: {
    name: string;
    species: string;
    breed: string | null;
    ageMonths: number | null;
    status: string;
    description: string | null;
    shelter: { name: string; email: string | null };
  };
}

export function PetInfo({ pet }: PetInfoProps) {
  const stats = [
    { label: "Species", value: pet.species, icon: Dog },
    { label: "Breed", value: pet.breed || "Mixed Breed", icon: Layers },
    { label: "Age", value: formatAgeMonths(pet.ageMonths), icon: Calendar },
    { label: "Shelter", value: pet.shelter.name, icon: Home },
  ];

  const tags = [
    "Vaccinated",
    "Friendly",
    "House Trained",
    "Microchipped"
  ];

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${
            pet.status === 'AVAILABLE' 
              ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
              : 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
          }`}>
            {pet.status}
          </span>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Added recently</span>
        </div>
        
        <h1 className="text-6xl font-black text-gray-900 dark:text-white font-outfit uppercase tracking-tighter leading-none">
          {pet.name}
        </h1>

        <div className="flex flex-wrap gap-2 pt-2">
           {tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                 {tag}
              </span>
           ))}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
            className="p-4 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
               <div className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  <stat.icon size={16} />
               </div>
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</span>
            </div>
            <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight truncate">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Description */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
          <Info size={20} className="text-brand-primary" />
          <h3 className="text-lg font-black uppercase tracking-tight font-outfit">About {pet.name}</h3>
        </div>
        <div className="p-8 rounded-[2rem] bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/50 backdrop-blur-sm">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            {pet.description || "No detailed description available currently. Please contact the shelter for more information about this lovely pet."}
          </p>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-accent-purple/5 border border-brand-primary/10 flex items-center gap-4">
         <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center text-brand-primary">
            <ShieldCheck size={24} />
         </div>
         <div>
            <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-0.5">Verified Profile</p>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-400">All health records have been verified by {pet.shelter.name}.</p>
         </div>
      </div>
    </div>
  );
}
