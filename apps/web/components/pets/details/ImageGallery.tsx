"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ImageWithFallback } from "../../ImageWithFallback";

interface ImageGalleryProps {
  images: { url: string; id: string }[];
  petName: string;
}

export function ImageGallery({ images, petName }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square rounded-[2.5rem] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl shadow-inner uppercase font-black text-gray-300">
        🐾
      </div>
    );
  }

  const currentImage = images[index];
  if (!currentImage) return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="space-y-6">
      {/* Main Image Container */}
      <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-900 group shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <div 
              className={`w-full h-full cursor-pointer transition-transform duration-700 group-hover:scale-110 ${isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <ImageWithFallback
                src={currentImage.url}
                alt={`${petName} - image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
          {index + 1} / {images.length}
        </div>

        {/* Zoom Hint */}
        <button 
           onClick={() => setIsZoomed(!isZoomed)}
           className="absolute top-6 right-6 p-3 rounded-2xl bg-black/40 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all"
        >
           <Maximize2 size={18} />
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar px-1">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setIndex(i)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden transition-all duration-300 ${
                index === i 
                  ? "ring-4 ring-brand-primary ring-offset-4 dark:ring-offset-gray-950 scale-105" 
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <ImageWithFallback
                src={img.url}
                alt={`${petName} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
