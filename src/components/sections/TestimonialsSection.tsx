import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, MapPin } from 'lucide-react';
import { testimonialsData } from '../../config/siteConfig';
import { SectionHeading } from '../ui/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const total = testimonialsData.length;
  const current = testimonialsData[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused && !prefersReducedMotion) {
      timerRef.current = setInterval(handleNext, 4500);
    }
  };

  // Autoplay effect
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(handleNext, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isPaused, prefersReducedMotion]);

  // Compute previous and next indices
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const prevItem = testimonialsData[prevIndex];
  const nextItem = testimonialsData[nextIndex];

  return (
    <section
      className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden select-none border-t border-[#E7D7C1]"
      aria-roledescription="carousel"
      aria-label="Client Testimonials and Reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-35" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#E7D7C1]/50 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#4A1521]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLIENT REVIEWS & EXPERIENCES"
          title="Words From Families & Couples"
          subtitle="Real experiences from families and event planners across Tamil Nadu who trusted Subham Cards & Senthil Prints for their auspicious ceremonies."
        />

        {/* 3-CARD CAROUSEL CONTAINER */}
        <div className="relative mt-12 sm:mt-16 w-full max-w-6xl mx-auto min-h-[380px] sm:min-h-[350px] md:min-h-[330px] flex items-center justify-center overflow-hidden py-4">
          
          {/* 1. PREVIOUS CARD (Blurred, smaller scale ~0.88, lower opacity ~0.35, pushed left, NO AVATAR) */}
          <motion.div
            key={`prev-${prevItem.id}`}
            onClick={handlePrev}
            aria-label={`Previous review by ${prevItem.coupleName}`}
            className="absolute hidden md:flex flex-col justify-between w-[520px] max-w-[85%] p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E7D7C1] shadow-md cursor-pointer z-10"
            initial={false}
            animate={{
              x: '-60%',
              scale: 0.88,
              opacity: 0.35,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Header with Quote & Stars */}
            <div className="flex items-center justify-between mb-3 opacity-50">
              <Quote className="w-5 h-5 text-[#9E7B4F] rotate-180" />
              <div className="flex text-[#C5A880]">
                {[...Array(prevItem.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Snippet */}
            <p className="font-serif text-base text-[#1C1917] italic line-clamp-3 leading-relaxed">
              "{prevItem.review}"
            </p>

            {/* Author Footer (No Avatar) */}
            <div className="mt-4 pt-3 border-t border-[#F4EFEB] flex items-center justify-between">
              <div>
                <h4 className="font-serif text-sm font-bold text-[#4A1521]">
                  {prevItem.coupleName}
                </h4>
                <p className="text-[11px] text-[#78716C]">{prevItem.eventType} • {prevItem.city}</p>
              </div>
              <span className="text-[10px] text-[#9E7B4F] font-medium">{prevItem.cardChosen}</span>
            </div>
          </motion.div>

          {/* 2. ACTIVE / CENTER CARD (Fully visible, sharp, elevated, NO AVATAR) */}
          <motion.div
            key={`active-${current.id}`}
            className="relative w-full max-w-[640px] p-6 sm:p-8 md:p-10 rounded-2xl bg-[#FFFFFF] border border-[#E7D7C1] shadow-xl shadow-[#4A1521]/10 z-30 text-left mx-auto"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { scale: 0.94, opacity: 0.6, y: 8 }
            }
            animate={{
              x: '0%',
              scale: 1,
              opacity: 1,
              y: 0,
              zIndex: 30,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: prefersReducedMotion ? 0.2 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Top Bar: Quote Motif + Star Rating */}
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F4EFEB] text-[#4A1521] flex items-center justify-center">
                  <Quote className="w-4 h-4 text-[#4A1521] rotate-180" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#9E7B4F]">
                  Verified Patron Review
                </span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-[#C5A880]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1C1917] italic leading-relaxed font-light mb-6">
              “{current.review}”
            </p>

            {/* Author Profile Information (Without avatar image) */}
            <div className="pt-4 border-t border-[#F4EFEB] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A1521]">
                  {current.coupleName}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#78716C] mt-0.5">
                  <span>{current.eventType}</span>
                  <span>•</span>
                  <span className="text-[#9E7B4F] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {current.city}
                  </span>
                  <span>•</span>
                  <span>{current.eventDate}</span>
                </div>
              </div>

              {/* Card Suite Tag */}
              <div className="inline-flex items-center gap-1 text-[11px] font-medium text-[#4A1521] bg-[#FAF8F5] px-3 py-1.5 rounded-xs border border-[#E7D7C1] self-start sm:self-auto">
                <Sparkles className="w-3 h-3 text-[#9E7B4F]" />
                <span className="truncate max-w-[220px]">{current.cardChosen}</span>
              </div>
            </div>
          </motion.div>

          {/* 3. NEXT CARD (Blurred, smaller scale ~0.88, lower opacity ~0.35, pushed right, NO AVATAR) */}
          <motion.div
            key={`next-${nextItem.id}`}
            onClick={handleNext}
            aria-label={`Next review by ${nextItem.coupleName}`}
            className="absolute hidden md:flex flex-col justify-between w-[520px] max-w-[85%] p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E7D7C1] shadow-md cursor-pointer z-10"
            initial={false}
            animate={{
              x: '60%',
              scale: 0.88,
              opacity: 0.35,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Header with Quote & Stars */}
            <div className="flex items-center justify-between mb-3 opacity-50">
              <Quote className="w-5 h-5 text-[#9E7B4F] rotate-180" />
              <div className="flex text-[#C5A880]">
                {[...Array(nextItem.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Snippet */}
            <p className="font-serif text-base text-[#1C1917] italic line-clamp-3 leading-relaxed">
              "{nextItem.review}"
            </p>

            {/* Author Footer (No Avatar) */}
            <div className="mt-4 pt-3 border-t border-[#F4EFEB] flex items-center justify-between">
              <div>
                <h4 className="font-serif text-sm font-bold text-[#4A1521]">
                  {nextItem.coupleName}
                </h4>
                <p className="text-[11px] text-[#78716C]">{nextItem.eventType} • {nextItem.city}</p>
              </div>
              <span className="text-[10px] text-[#9E7B4F] font-medium">{nextItem.cardChosen}</span>
            </div>
          </motion.div>

          {/* Navigation Arrows for Direct Interactive Step */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 bg-[#FAF8F5]/90 hover:bg-[#4A1521] text-[#1C1917] hover:text-white rounded-full border border-[#E7D7C1] shadow-md transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 bg-[#FAF8F5]/90 hover:bg-[#4A1521] text-[#1C1917] hover:text-white rounded-full border border-[#E7D7C1] shadow-md transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* TEXT / INDEX NAVIGATION BUTTONS [ 01 ] [ 02 ] [ 03 ] ... */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center space-y-3">
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {testimonialsData.map((item, idx) => {
              const isActive = currentIndex === idx;
              const formattedIndex = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Jump to review ${formattedIndex}: ${item.coupleName}`}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xs font-mono text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4A1521] ${
                    isActive
                      ? 'bg-[#4A1521] text-[#FAF8F5] border-2 border-[#C5A880] shadow-md scale-105'
                      : 'bg-[#FFFFFF] text-[#57534E] border border-[#E7D7C1] hover:border-[#C5A880] hover:text-[#1C1917]'
                  }`}
                >
                  [ {formattedIndex} ]
                </button>
              );
            })}
          </div>

          {/* Current Review Indicator */}
          <div className="text-center">
            <span className="text-xs text-[#78716C] font-medium">
              Showing Review {currentIndex + 1} of {total} • <span className="text-[#4A1521] font-semibold">{current.coupleName}</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
