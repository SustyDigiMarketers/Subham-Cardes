import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';
import { CardShowcaseItem } from '../../types';
import { Button } from './Button';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Badge } from './FormControls';
import { generateQuickWhatsAppLink } from '../../services/enquiryService';

interface LightboxProps {
  item: CardShowcaseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onBookStyle: (card: CardShowcaseItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onBookStyle,
}) => {
  const handleKeyDown受 = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown受);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown受);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown受]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1C1917]/90 backdrop-blur-md cursor-pointer"
        />

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous card design"
          className="absolute left-3 sm:left-6 z-50 p-2.5 sm:p-3 text-[#FAF8F5] bg-[#1C1917]/60 hover:bg-[#4A1521] border border-[#E7D7C1]/20 rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next card design"
          className="absolute right-3 sm:right-6 z-50 p-2.5 sm:p-3 text-[#FAF8F5] bg-[#1C1917]/60 hover:bg-[#4A1521] border border-[#E7D7C1]/20 rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-50 w-full max-w-5xl max-h-[90vh] bg-[#FAF8F5] rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#E7D7C1]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 z-50 p-2 bg-[#FAF8F5]/80 hover:bg-[#4A1521] text-[#1C1917] hover:text-[#FAF8F5] rounded-full transition-colors duration-200 cursor-pointer shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image Canvas */}
          <div className="relative w-full lg:w-3/5 bg-[#1C1917] flex items-center justify-center p-6 sm:p-10 min-h-[300px] sm:min-h-[420px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full max-h-[65vh] object-contain rounded-xs shadow-2xl transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4">
              <Badge variant="burgundy">{item.category}</Badge>
            </div>
          </div>

          {/* Right: Details & Action */}
          <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[85vh] bg-[#FAF8F5]">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#9E7B4F] uppercase">
                  Featured Invitation Suite
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] mt-1">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[#4A1521] mt-1">
                  From {item.priceEstimate}
                </p>
              </div>

              <p className="text-sm text-[#57534E] leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 border-t border-[#E7D7C1] space-y-2.5">
                <div>
                  <span className="text-xs font-medium text-[#78716C] uppercase tracking-wider block">
                    Paper & Board Stock
                  </span>
                  <p className="text-xs font-semibold text-[#1C1917]">{item.paperType}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-[#78716C] uppercase tracking-wider block">
                    Dimensions
                  </span>
                  <p className="text-xs font-semibold text-[#1C1917]">{item.dimensions}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E7D7C1]">
                <span className="text-xs font-medium text-[#78716C] uppercase tracking-wider block mb-2">
                  Artisanal Finishes Included
                </span>
                <ul className="space-y-1.5">
                  {item.finishDetails.map((finish, idx) => (
                    <li key={idx} className="flex items-center text-xs text-[#24211E] gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9E7B4F] shrink-0" />
                      <span>{finish}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#E7D7C1] space-y-2.5">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                rightIcon={<Sparkles className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  onBookStyle(item);
                }}
              >
                Book This Card Style
              </Button>

              <a
                href={generateQuickWhatsAppLink(
                  `Hi Velvet & Vow! I am interested in inquiring about the "${item.title}" (${item.category}) suite.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="w-full"
                  leftIcon={<WhatsAppIcon className="w-3.5 h-3.5" />}
                >
                  Quick Chat via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
