"use client";

import { useEffect, useState } from "react";
import { PetCard } from "../PetCard";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SimilarPetsProps {
  species: string;
  currentId: string;
}

export function SimilarPets({ species, currentId }: SimilarPetsProps) {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSimilar() {
      try {
        const res = await fetch(`/api/pets?species=${species}`);
        const data = await res.json();
        // Filter out current pet and take first 3
        setPets(data.filter((p: any) => p.id !== currentId).slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch similar pets", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSimilar();
  }, [species, currentId]);

  if (!loading && pets.length === 0) return null;

  return (
    <section className="space-y-8 mt-20 border-t border-gray-100 dark:border-gray-800 pt-20">
      <div className="flex items-center justify-between">
         <div className="space-y-1">
            <div className="flex items-center gap-2 text-brand-primary">
               <Heart size={20} fill="currentColor" />
               <h3 className="text-lg font-black uppercase tracking-wider font-outfit">Similar Companions</h3>
            </div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">More {species.toLowerCase()}s looking for a home</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="aspect-[4/5] rounded-[2.5rem] bg-gray-100 dark:bg-gray-800 animate-pulse" />
          ))
        ) : (
          pets.map((pet, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={pet.id}
            >
              <PetCard pet={pet} />
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
