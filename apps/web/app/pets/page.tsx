"use client";

import { motion } from "framer-motion";
import { Section } from "../../components/layout/Section";
import { PetGrid } from "../../components/pets/PetGrid";
import { FeaturedPet } from "../../components/pets/FeaturedPet";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export default function PetsPage() {
  const [featuredPet, setFeaturedPet] = useState<any>(null);

  useEffect(() => {
    // Fetch a featured pet (just the first available one for now)
    fetch("/api/pets?status=AVAILABLE&published=true")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setFeaturedPet(data[0]);
        }
      });
  }, []);

  return (
    <main className="min-h-screen pb-20 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <Section className="relative z-10 pt-16 md:pt-24">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-6">
              Verified Listings Only
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.9] font-outfit uppercase">
              Browse <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-accent-purple to-brand-secondary underline decoration-brand-primary/30 decoration-8 underline-offset-10">Available</span> <br />
              Pets.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:text-right"
          >
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-md md:ml-auto mb-8">
              Every pet listed here is waiting for a loving home. Use filters to find your perfect match.
            </p>
            <Link href="/admin/pets">
              <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white hover:text-brand-primary transition-colors group">
                <Shield size={16} className="text-brand-primary" />
                Manage Listings (Staff)
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Featured Pet Highlight */}
        {featuredPet && <FeaturedPet pet={featuredPet} />}

        {/* Main Interactive Grid */}
        <PetGrid />
      </Section>
    </main>
  );
}
