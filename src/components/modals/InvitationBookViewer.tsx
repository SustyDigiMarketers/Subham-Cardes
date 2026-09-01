import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CeremonyCardBook } from '../../types';

interface InvitationBookViewerProps {
  isOpen: boolean;
  onClose: () => void;
  bookData: CeremonyCardBook | null;
  onBookThisStyle?: (styleName: string) => void;
}

// Hook to detect mobile breakpoint (< 768px) with resize & mediaQuery support
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMatches = () => {
      setIsMobile(mediaQuery.matches);
    };
    updateMatches();
    mediaQuery.addEventListener('change', updateMatches);
    window.addEventListener('resize', updateMatches);
    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
      window.removeEventListener('resize', updateMatches);
    };
  }, []);

  return isMobile;
};

export const InvitationBookViewer: React.FC<InvitationBookViewerProps> = ({
  isOpen,
  onClose,
  bookData,
}) => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Desktop Sequence:
  // 0: Front Cover
  // 1: Open Spread (Inside Left + Inside Right side-by-side with central spine)
  // 2: Back Cover (3 steps)
  //
  // Mobile Sequence (Strictly one page at a time):
  // 0: Front Cover
  // 1: Inside Left
  // 2: Inside Right
  // 3: Back Cover (4 steps)
  const maxSteps = isMobile ? 4 : 3;

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev'>('next');

  // Track responsive breakpoint change to seamlessly map step position
  const prevIsMobileRef = useRef<boolean>(isMobile);
  useEffect(() => {
    if (prevIsMobileRef.current !== isMobile) {
      if (!isMobile) {
        // Switch to Desktop (0, 1, 2)
        setCurrentStep((prev) => {
          if (prev === 0) return 0;
          if (prev === 1 || prev === 2) return 1;
          return 2;
        });
      } else {
        // Switch to Mobile (0, 1, 2, 3)
        setCurrentStep((prev) => {
          if (prev === 0) return 0;
          if (prev === 1) return 1;
          if (prev >= 2) return 3;
          return prev;
        });
      }
      prevIsMobileRef.current = isMobile;
    }
  }, [isMobile]);

  // Reset to front cover whenever modal opens or category changes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setTurnDirection('next');
      // Lock background scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, bookData]);

  const handleNext = useCallback(() => {
    if (currentStep < maxSteps - 1) {
      setTurnDirection('next');
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, maxSteps]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setTurnDirection('prev');
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  // Touch Swipe Gesture Support (Swipe left = Next, Swipe right = Previous)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation & accessibility (ESC to close, Arrow keys to turn pages)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !bookData) return null;

  // Extract pages safely
  const coverPage =
    bookData.pages.find((p) => p.pageType === 'cover') || bookData.pages[0];
  const insideLeftPage =
    bookData.pages.find((p) => p.pageType === 'spread-left') ||
    bookData.pages[1] ||
    coverPage;
  const insideRightPage =
    bookData.pages.find((p) => p.pageType === 'spread-right') ||
    bookData.pages[2] ||
    coverPage;
  const backPage =
    bookData.pages.find((p) => p.pageType === 'back') ||
    bookData.pages[bookData.pages.length - 1] ||
    coverPage;

  // Mobile individual pages array
  const mobilePages = [
    { page: coverPage, type: 'front', spine: 'left' },
    { page: insideLeftPage, type: 'inside-left', spine: 'right' },
    { page: insideRightPage, type: 'inside-right', spine: 'left' },
    { page: backPage, type: 'back', spine: 'right' },
  ];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 select-none overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={`${bookData.categoryName} Invitation Card Viewer`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Backdrop overlay: translucent dark tint + strong backdrop blur */}
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xl"
        />

        {/* Minimal Close Button (Top Right) */}
        <button
          onClick={onClose}
          aria-label="Close invitation card viewer"
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-105"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Previous Button (Left Side) */}
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          aria-label="Previous page"
          className={`fixed left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-4 rounded-full border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-2xl ${
            currentStep === 0
              ? 'opacity-0 pointer-events-none'
              : 'opacity-85 hover:opacity-100 bg-black/50 hover:bg-black/80 text-white hover:scale-110'
          }`}
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Next Button (Right Side) */}
        <button
          onClick={handleNext}
          disabled={currentStep === maxSteps - 1}
          aria-label="Next page"
          className={`fixed right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-4 rounded-full border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-2xl ${
            currentStep === maxSteps - 1
              ? 'opacity-0 pointer-events-none'
              : 'opacity-85 hover:opacity-100 bg-black/50 hover:bg-black/80 text-white hover:scale-110'
          }`}
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* PERSPECTIVE CARD STAGE */}
        <div
          className="relative z-20 w-full max-w-5xl h-full max-h-[88vh] flex items-center justify-center pointer-events-auto"
          style={{
            perspective: '1800px',
          }}
        >
          <AnimatePresence mode="wait">
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* MOBILE PRESENTATION: STRICTLY ONE CARD PAGE AT A TIME       */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {isMobile ? (
              <motion.div
                key={`mobile-page-${currentStep}`}
                custom={turnDirection}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0, scale: 0.96 }
                    : {
                        rotateY: turnDirection === 'next' ? 75 : -75,
                        scale: 0.94,
                        opacity: 0.3,
                        transformOrigin:
                          turnDirection === 'next'
                            ? 'left center'
                            : 'right center',
                      }
                }
                animate={{
                  rotateY: 0,
                  scale: 1,
                  opacity: 1,
                  transformOrigin: 'center center',
                }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0, scale: 0.96 }
                    : {
                        rotateY: turnDirection === 'next' ? -80 : 80,
                        scale: 0.94,
                        opacity: 0,
                        transformOrigin:
                          turnDirection === 'next'
                            ? 'left center'
                            : 'right center',
                      }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.55,
                  ease: [0.25, 1, 0.5, 1],
                }}
                onClick={handleNext}
                className="relative max-h-[78vh] w-auto max-w-[86vw] aspect-[3/4.2] rounded-md overflow-hidden shadow-2xl shadow-black/80 cursor-pointer group bg-neutral-950 flex items-center justify-center"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Single Card Image - High Quality, Uncropped Aspect Ratio */}
                <img
                  src={mobilePages[currentStep]?.page.image}
                  alt={`${bookData.title} Page`}
                  className="w-full h-full object-contain rounded-md select-none"
                  draggable={false}
                />

                {/* Believable spine crease shadow based on page position */}
                {mobilePages[currentStep]?.spine === 'left' && (
                  <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
                )}
                {mobilePages[currentStep]?.spine === 'right' && (
                  <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/45 via-black/15 to-transparent pointer-events-none" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            ) : (
              /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
              /* DESKTOP / TABLET PRESENTATION: 2-PAGE SPREAD PRESERVED      */
              /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
              <>
                {/* DESKTOP STATE 1: FRONT COVER (Single Centered Page) */}
                {currentStep === 0 && (
                  <motion.div
                    key="desktop-card-step-front"
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0, scale: 0.96 }
                        : {
                            rotateY: turnDirection === 'prev' ? -80 : 0,
                            scale: 0.94,
                            opacity: 0.3,
                          }
                    }
                    animate={{
                      rotateY: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0, scale: 0.96 }
                        : {
                            rotateY: -90,
                            scale: 0.94,
                            opacity: 0,
                            transformOrigin: 'left center',
                          }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0.2 : 0.65,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    onClick={handleNext}
                    className="relative max-h-[82vh] w-auto aspect-[3/4.2] rounded-md overflow-hidden shadow-2xl shadow-black/60 cursor-pointer group"
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'left center',
                    }}
                  >
                    <img
                      src={coverPage.image}
                      alt={`${bookData.title} Front Cover`}
                      className="w-full h-full object-cover rounded-md select-none"
                      draggable={false}
                    />

                    {/* Subtle spine shadow / depth gradient */}
                    <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                )}

                {/* DESKTOP STATE 2: OPEN BOOK SPREAD (Inside Left | Inside Right) */}
                {currentStep === 1 && (
                  <motion.div
                    key="desktop-card-step-spread"
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0, scale: 0.96 }
                        : {
                            scale: 0.94,
                            opacity: 0.3,
                          }
                    }
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0, scale: 0.96 }
                        : {
                            scale: 0.94,
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0.2 : 0.65,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="relative max-h-[82vh] w-full max-w-4xl grid grid-cols-2 rounded-md overflow-hidden shadow-2xl shadow-black/70"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* 1. LEFT INSIDE PAGE */}
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : {
                              rotateY: turnDirection === 'next' ? 90 : 0,
                              transformOrigin: 'right center',
                              opacity: 0.3,
                            }
                      }
                      animate={{
                        rotateY: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: prefersReducedMotion ? 0.15 : 0.6,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className="relative aspect-[3/4.2] bg-neutral-900 overflow-hidden"
                      style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'right center',
                      }}
                    >
                      <img
                        src={insideLeftPage.image}
                        alt="Inside Left Page"
                        className="w-full h-full object-cover select-none"
                        draggable={false}
                      />
                      {/* Spine depth shadow on inner right edge */}
                      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/50 via-black/20 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Central Spine Fold Bar */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-r from-black/40 via-black/10 to-black/40 z-30 pointer-events-none" />

                    {/* 2. RIGHT INSIDE PAGE */}
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : {
                              rotateY: turnDirection === 'prev' ? -90 : 0,
                              transformOrigin: 'left center',
                              opacity: 0.3,
                            }
                      }
                      animate={{
                        rotateY: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: prefersReducedMotion ? 0.15 : 0.6,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className="relative aspect-[3/4.2] bg-neutral-900 overflow-hidden"
                      style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'left center',
                      }}
                    >
                      <img
                        src={insideRightPage.image}
                        alt="Inside Right Page"
                        className="w-full h-full object-cover select-none"
                        draggable={false}
                      />
                      {/* Spine depth shadow on inner left edge */}
                      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                  </motion.div>
                )}

                {/* DESKTOP STATE 3: FINAL BACK PAGE (Single Centered Page) */}
                {currentStep === 2 && (
                  <motion.div
                    key="desktop-card-step-back"
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0, scale: 0.96 }
                        : {
                            rotateY: turnDirection === 'next' ? 85 : 0,
                            scale: 0.94,
                            opacity: 0.3,
                          }
                    }
                    animate={{
                      rotateY: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0, scale: 0.96 }
                        : {
                            rotateY: 85,
                            scale: 0.94,
                            opacity: 0,
                            transformOrigin: 'right center',
                          }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0.2 : 0.65,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    onClick={handlePrev}
                    className="relative max-h-[82vh] w-auto aspect-[3/4.2] rounded-md overflow-hidden shadow-2xl shadow-black/60 cursor-pointer group"
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'right center',
                    }}
                  >
                    <img
                      src={backPage.image}
                      alt={`${bookData.title} Back Cover`}
                      className="w-full h-full object-cover rounded-md select-none"
                      draggable={false}
                    />

                    {/* Spine depth shadow on right edge */}
                    <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/40 via-black/15 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatePresence>
  );
};
