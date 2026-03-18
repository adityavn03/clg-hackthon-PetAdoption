"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PetCard } from "./PetCard";
import { PetFilters } from "./PetFilters";
import { PetGridSkeleton } from "./PetSkeleton";
// import { SearchSortBar } from "./SearchSortBar"; // I'll merge Search into Filters for now or create a small sort bar

export function PetGrid() {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    species: "ALL",
    age: "ALL",
    status: "ALL",
    size: "ALL",
  });
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    async function fetchPets() {
      setLoading(true);
      try {
        const res = await fetch("/api/pets");
        const data = await res.json();
        // Assuming API returns an array or object with items
        setPets(Array.isArray(data) ? data : data.items || []);
      } catch (err) {
        console.error("Failed to fetch pets", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPets();
  }, []);

  const filteredPets = useMemo(() => {
    return pets.filter(pet => {
      const matchesSearch = 
        pet.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        (pet.breed && pet.breed.toLowerCase().includes(filters.search.toLowerCase()));
      
      const matchesSpecies = filters.species === "ALL" || pet.species === filters.species;
      const matchesStatus = filters.status === "ALL" || pet.status === filters.status;
      const matchesSize = filters.size === "ALL" || pet.size === filters.size;
      
      let matchesAge = true;
      if (filters.age !== "ALL") {
        const age = pet.ageMonths || 0;
        if (filters.age === "0-1") matchesAge = age <= 12;
        else if (filters.age === "1-3") matchesAge = age > 12 && age <= 36;
        else if (filters.age === "3+") matchesAge = age > 36;
      }

      return matchesSearch && matchesSpecies && matchesStatus && matchesSize && matchesAge;
    }).sort((a, b) => {
      if (sortBy === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "age") return (a.ageMonths || 0) - (b.ageMonths || 0);
      return 0;
    });
  }, [pets, filters, sortBy]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(pets.map(p => p.species))).filter(Boolean);
    return cats as string[];
  }, [pets]);

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-8">
        <PetFilters 
          filters={filters} 
          setFilters={setFilters} 
          categories={categories} 
        />
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm font-bold text-gray-500">
            Showing <span className="text-gray-900 dark:text-white">{filteredPets.length}</span> pets
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-widest text-gray-400">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm font-black text-brand-primary outline-none cursor-pointer uppercase tracking-tight"
            >
              <option value="newest">Newest First</option>
              <option value="name">Name (A-Z)</option>
              <option value="age">Age (Youngest)</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <PetGridSkeleton />
      ) : filteredPets.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-32 text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-50 dark:bg-gray-900 text-6xl mb-6">
            🐾
          </div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase font-outfit mb-4">No Pets Found</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto font-medium">
            We couldn't find any pets matching your current filters. Try adjusting your search or clearing the filters!
          </p>
          <button 
            onClick={() => setFilters({ search: "", species: "ALL", age: "ALL", status: "ALL", size: "ALL" })}
            className="mt-8 px-8 py-4 rounded-2xl bg-brand-primary text-white font-black uppercase tracking-widest shadow-xl shadow-brand-primary/20 hover:scale-105 transition-transform"
          >
            Clear All Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
