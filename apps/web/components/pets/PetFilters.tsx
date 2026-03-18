"use client";

import { motion } from "framer-motion";
import { X, Search, SlidersHorizontal, ChevronDown } from "lucide-react";

interface PetFiltersProps {
  filters: any;
  setFilters: (filters: any) => void;
  categories: string[];
}

export function PetFilters({ filters, setFilters, categories }: PetFiltersProps) {
  const updateFilter = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      species: "ALL",
      age: "ALL",
      status: "ALL",
      size: "ALL",
    });
  };

  const hasActiveFilters = 
    filters.species !== "ALL" || 
    filters.age !== "ALL" || 
    filters.status !== "ALL" ||
    filters.size !== "ALL" ||
    filters.search !== "";

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-brand-primary transition-colors" />
        <input 
          type="text"
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          placeholder="Search by name or breed..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none shadow-sm transition-all text-gray-900 dark:text-white font-medium"
        />
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <FilterDropdown 
          label="Species"
          value={filters.species}
          options={["ALL", ...categories]}
          onChange={(val: string) => updateFilter("species", val)}
        />
        <FilterDropdown 
          label="Age"
          value={filters.age}
          options={["ALL", "0-1", "1-3", "3+"]}
          onChange={(val: string) => updateFilter("age", val)}
        />
        <FilterDropdown 
          label="Size"
          value={filters.size}
          options={["ALL", "SMALL", "MEDIUM", "LARGE", "XL"]}
          onChange={(val: string) => updateFilter("size", val)}
        />
        <FilterDropdown 
          label="Status"
          value={filters.status}
          options={["ALL", "AVAILABLE", "RESERVED", "ADOPTED"]}
          onChange={(val: string) => updateFilter("status", val)}
        />
        
        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={clearFilters}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-bold text-sm hover:bg-brand-primary hover:text-white transition-all border border-transparent hover:shadow-lg hover:shadow-brand-primary/20"
          >
            <X size={16} />
            Clear All
          </motion.button>
        )}
      </div>

      {/* Active Filter Chips */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.entries(filters).map(([key, value]) => {
            if (value === "ALL" || value === "" || key === "search") return null;
            return (
              <div 
                key={key}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-black uppercase tracking-wider"
              >
                {key}: {String(value)}
                <button onClick={() => updateFilter(key, "ALL")}>
                  <X size={12} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FilterDropdown({ 
  label, 
  value, 
  options, 
  onChange 
}: { 
  label: string; 
  value: string; 
  options: string[]; 
  onChange: (val: string) => void; 
}) {
  return (
    <div className="relative group">
      <label className="absolute -top-2 left-4 px-2 bg-white dark:bg-gray-950 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors group-focus-within:text-brand-primary">
        {label}
      </label>
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-4 pr-10 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none shadow-sm transition-all text-gray-900 dark:text-white font-bold text-sm appearance-none cursor-pointer"
      >
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-brand-primary transition-colors" size={16} />
    </div>
  );
}
