import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { FiligreeDivider } from '../ui/SectionHeading';
import { generateQuickWhatsAppLink } from '../../services/enquiryService';
import { fadeUp } from '../../utils/motionVariants';

interface FinalCTASectionProps {
  onOpenBookNow: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBookNow }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#4A1521] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#C5A880]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#310D15] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A880]">
            SUBHAM CARDS & SENTHIL PRINTS • TRICHY
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FAF8F5] font-normal leading-[1.15]">
            Let’s Create An Auspicious Invitation{' '}
            <span className="italic text-[#E7D7C1]">For Your Celebration.</span>
          </h2>

          <FiligreeDivider color="#E7D7C1" />

          <p className="text-base sm:text-lg text-[#E7D7C1]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Visit our showroom at Aravind Plaza, Trichy or connect on WhatsApp. Explore 2000+ ready-made & customized cards with precision in-house printing by Senthil Prints.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={onOpenBookNow}
              className="w-full sm:w-auto shadow-2xl"
              rightIcon={<Sparkles className="w-4 h-4" />}
            >
              Book Now / Inquire
            </Button>

            <a
              href={generateQuickWhatsAppLink('Hello Subham Cards! I would like to inquire about wedding and invitation cards with your showroom.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<WhatsAppIcon className="w-4 h-4" />}
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
