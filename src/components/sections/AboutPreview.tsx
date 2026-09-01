import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { FiligreeDivider } from '../ui/SectionHeading';
import { fadeUp, fadeRight, fadeLeft } from '../../utils/motionVariants';

interface AboutPreviewProps {
  onDiscoverStory: () => void;
  onOpenBookNow: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({
  onDiscoverStory,
  onOpenBookNow,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Premium Image Collage (5 columns) */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Editorial Image */}
              <div className="relative rounded-xs overflow-hidden shadow-xl border border-[#E7D7C1] bg-[#1C1917] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop"
                  alt="Artisanal letterpress card with wax seal and cotton paper"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -right-6 w-3/5 rounded-xs overflow-hidden shadow-2xl border-4 border-[#FAF8F5] hidden sm:block aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"
                  alt="Hot foil stamping on deep velvet cards"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Atelier Badge */}
              <div className="absolute -top-4 -left-4 bg-[#FAF8F5] p-3 rounded-xs border border-[#C5A880] shadow-lg flex items-center gap-2 text-xs font-semibold text-[#4A1521]">
                <Sparkles className="w-4 h-4 text-[#9E7B4F]" />
                <span>2000+ Card Varieties in Trichy</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative (7 columns) */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9E7B4F]">
                ABOUT SUBHAM CARDS & SENTHIL PRINTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-normal leading-[1.15]">
                More Than A Card.{' '}
                <span className="italic text-[#4A1521]">
                  It’s The Auspicious Beginning Of Your Celebration.
                </span>
              </h2>
            </div>

            <FiligreeDivider className="justify-start my-3" />

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-light">
              Subham Cards is one of the premier wedding card dealers and wholesalers in Trichy, Tamil Nadu. With an unmatched showroom collection of over 2000+ varieties of ready-made, exclusive, and customized cards, we have been helping families honor life’s most cherished milestones with dignity and reverence.
            </p>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-light">
              Powered by our in-house printing wing <strong className="font-semibold text-[#1C1917]">Senthil Prints</strong>, we provide high-speed multi-color offset printing, metallic gold foil stamping, deep embossing, screen printing, and UV spot finishes with eco-friendly paper at direct wholesale rates.
            </p>

            {/* Key Atelier Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '2000+ Ready-Made & Exclusive Designs',
                'In-House Printing Powered by Senthil Prints',
                'Expert Tamil & English DTP Typesetting',
                'Wholesale & Retail Factory-Direct Pricing',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#1C1917]">
                  <Check className="w-4 h-4 text-[#9E7B4F] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onDiscoverStory}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discover Our Heritage
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onOpenBookNow}
              >
                Inquire & Book Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
