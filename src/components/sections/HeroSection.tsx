import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroWeddingCards } from '../../config/siteConfig';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onOpenBookNow: (service?: string, cardStyle?: string) => void;
  onViewCollection?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookNow,
  onViewCollection,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const totalCards = heroWeddingCards.length;
  const currentCard = heroWeddingCards[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused && !prefersReducedMotion) {
      timerRef.current = setInterval(handleNext, 3500);
    }
  };

  // Autoplay management with robust cleanup
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(handleNext, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isPaused, prefersReducedMotion]);

  const handleViewCollection = () => {
    if (onViewCollection) {
      onViewCollection();
      return;
    }
    const servicesEl = document.getElementById('services-preview');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute indices for 3-card presentation
  const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
  const nextIndex = (currentIndex + 1) % totalCards;

  return (
    <section
      className="relative flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#FAF8F5]"
      aria-roledescription="carousel"
      aria-label="Featured Wedding Invitations Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-35 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-[#E7D7C1]/50 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] rounded-full bg-[#4A1521]/10 blur-3xl" />
        <div className="absolute bottom-10 -left-24 w-[380px] h-[380px] rounded-full bg-[#C5A880]/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 
            LEFT ON DESKTOP / BOTTOM ON MOBILE
            On Mobile: order-2 (Appears directly beneath the Carousel)
            On Desktop (lg): order-1 (Left Column)
          */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Synchronized Card Information */}
            <div className="w-full min-h-[130px] sm:min-h-[150px] flex flex-col items-center lg:items-start justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-2 sm:space-y-3.5"
                >
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#F4EFEB] border border-[#E7D7C1] rounded-xs text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4A1521]">
                    <Sparkles className="w-3 h-3 text-[#9E7B4F]" />
                    <span>{currentCard.category}</span>
                  </div>

                  {/* Card Name */}
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
                    {currentCard.name}
                  </h1>

                  {/* Card Description */}
                  <p className="text-xs sm:text-base lg:text-lg text-[#57534E] font-light leading-relaxed max-w-xl px-2 sm:px-0">
                    {currentCard.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 
              EXACTLY TWO CTA BUTTONS — STRICTLY A SINGLE HORIZONTAL ROW ON ALL SCREENS
              (Mobile, Tablet & Desktop)
            */}
            <div className="pt-5 sm:pt-7 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookNow(undefined, `${currentCard.name} (${currentCard.category})`)}
                className="flex-1 sm:flex-initial sm:min-w-[150px] shadow-md text-xs sm:text-sm py-2.5 sm:py-3.5 px-3 sm:px-6 whitespace-nowrap"
                rightIcon={<Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                id="hero-book-now-button"
              >
                Book Now
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={handleViewCollection}
                className="flex-1 sm:flex-initial sm:min-w-[150px] text-xs sm:text-sm py-2.5 sm:py-3.5 px-3 sm:px-6 whitespace-nowrap"
                rightIcon={<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                id="hero-view-collection-button"
              >
                View Collection
              </Button>
            </div>

          </div>

          {/* 
            RIGHT ON DESKTOP / TOP ON MOBILE
            On Mobile: order-1 (Appears FIRST at the top of the mobile hero)
            On Desktop (lg): order-2 (Right Column)
          */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col items-center justify-center w-full select-none">
            
            {/* 3D Wedding Card Carousel */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] h-[310px] sm:h-[380px] md:h-[430px] lg:h-[450px] flex items-center justify-center">
              
              {/* PREVIOUS CARD (Left edge, blurred, scaled down, clickable) */}
              <motion.div
                key={`prev-${heroWeddingCards[prevIndex].id}`}
                onClick={handlePrev}
                aria-label={`Previous card: ${heroWeddingCards[prevIndex].name}`}
                className="absolute w-[58%] sm:w-[54%] aspect-[3/4] cursor-pointer rounded-xs overflow-hidden border border-[#E7D7C1] shadow-lg bg-[#FAF8F5]"
                initial={false}
                animate={{
                  x: '-44%',
                  scale: 0.84,
                  opacity: 0.4,
                  rotate: -3.5,
                  zIndex: 10,
                  filter: 'blur(3px)',
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.1 : 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={heroWeddingCards[prevIndex].image}
                  alt={heroWeddingCards[prevIndex].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/20" />
              </motion.div>

              {/* NEXT CARD (Right edge, blurred, scaled down, clickable) */}
              <motion.div
                key={`next-${heroWeddingCards[nextIndex].id}`}
                onClick={handleNext}
                aria-label={`Next card: ${heroWeddingCards[nextIndex].name}`}
                className="absolute w-[58%] sm:w-[54%] aspect-[3/4] cursor-pointer rounded-xs overflow-hidden border border-[#E7D7C1] shadow-lg bg-[#FAF8F5]"
                initial={false}
                animate={{
                  x: '44%',
                  scale: 0.84,
                  opacity: 0.4,
                  rotate: 3.5,
                  zIndex: 10,
                  filter: 'blur(3px)',
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.1 : 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={heroWeddingCards[nextIndex].image}
                  alt={heroWeddingCards[nextIndex].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/20" />
              </motion.div>

              {/* ACTIVE CENTER CARD (Visually dominant, sharp, elevated) */}
              <motion.div
                key={`active-${currentCard.id}`}
                className="relative w-[70%] sm:w-[64%] aspect-[3/4] z-30 rounded-xs bg-[#FFFFFF] p-2 sm:p-3 border border-[#C5A880]/70 shadow-2xl shadow-[#4A1521]/20"
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { scale: 0.92, opacity: 0.7, y: 10 }
                }
                animate={{
                  x: '0%',
                  scale: 1,
                  opacity: 1,
                  rotate: 0,
                  y: 0,
                  zIndex: 30,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Card Frame */}
                <div className="relative w-full h-full rounded-xs overflow-hidden bg-[#1C1917] group">
                  <img
                    src={currentCard.image}
                    alt={currentCard.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fetchPriority="high"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-black/10" />

                  {/* Floating Bottom Card Label Tag */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-[#FAF8F5]/95 backdrop-blur-md px-2.5 py-1.5 sm:py-2 rounded-xs border border-[#E7D7C1] flex items-center justify-between shadow-lg text-left">
                    <div>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#9E7B4F] block">
                        Signature Collection
                      </span>
                      <span className="font-serif text-xs sm:text-sm font-semibold text-[#1C1917] truncate block max-w-[130px] sm:max-w-[200px]">
                        {currentCard.name}
                      </span>
                    </div>
                    {currentCard.finishHighlight && (
                      <span className="text-[8px] sm:text-[9px] font-medium text-[#4A1521] bg-[#F4EFEB] px-1.5 py-0.5 rounded-xs border border-[#E7D7C1]">
                        {currentCard.finishHighlight}
                      </span>
                    )}
                  </div>
                </div>

                {/* Corner Seal Accent */}
                <div className="absolute -top-2.5 -right-2.5 sm:-top-3.5 sm:-right-3.5 bg-[#4A1521] text-[#FAF8F5] p-1.5 sm:p-2 rounded-full shadow-xl border-2 border-[#FAF8F5] flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11">
                  <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#C5A880]" />
                </div>
              </motion.div>

              {/* Direct Interactive Control Buttons */}
              <button
                onClick={handlePrev}
                aria-label="Previous wedding card"
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-40 p-1.5 sm:p-2.5 bg-[#FAF8F5]/90 hover:bg-[#4A1521] text-[#1C1917] hover:text-white rounded-full border border-[#E7D7C1] shadow-md transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next wedding card"
                className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-40 p-1.5 sm:p-2.5 bg-[#FAF8F5]/90 hover:bg-[#4A1521] text-[#1C1917] hover:text-white rounded-full border border-[#E7D7C1] shadow-md transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Carousel Dot Indicators */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {heroWeddingCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${card.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 sm:w-7 bg-[#4A1521]'
                      : 'w-2 bg-[#E7D7C1] hover:bg-[#C5A880]'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
