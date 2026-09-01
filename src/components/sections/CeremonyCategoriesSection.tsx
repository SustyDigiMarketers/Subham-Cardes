import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { ceremonyCategories } from '../../config/ceremonyCardsData';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

interface CeremonyCategoriesSectionProps {
  onOpenBookViewer: (slug: string) => void;
}

export const CeremonyCategoriesSection: React.FC<CeremonyCategoriesSectionProps> = ({
  onOpenBookViewer,
}) => {
  return (
    <section
      id="invitation-categories"
      className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E7D7C1] scroll-mt-20 relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#E7D7C1]/60 blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-[#4A1521]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="AUSPICIOUS CEREMONIES & CELEBRATIONS"
          title="Invitations For Every Auspicious Ceremony"
          subtitle="Explore our curated collection of 2000+ invitation cards crafted in traditional, contemporary and luxury styles. Click any card to open the interactive digital book reader."
        />

        {/* 8 Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16"
        >
          {ceremonyCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              onClick={() => onOpenBookViewer(cat.slug)}
              className="bg-[#FFFFFF] rounded-xs border border-[#E7D7C1] hover:border-[#C5A880] transition-all duration-300 hover:shadow-xl group overflow-hidden flex flex-col justify-between cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenBookViewer(cat.slug);
                }
              }}
              aria-label={`Open digital book reader for ${cat.name}`}
            >
              <div>
                {/* Image Cover Preview Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1917]">
                  <img
                    src={cat.coverImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Index Number Badge */}
                  <div className="absolute top-3 left-3 bg-[#4A1521] text-[#FAF8F5] text-[11px] font-mono px-2 py-0.5 rounded-xs">
                    0{idx + 1}
                  </div>

                  {/* Interactive Book Reader Hover Prompt */}
                  <div className="absolute bottom-3 right-3 bg-[#FAF8F5]/95 backdrop-blur-xs text-[#4A1521] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-xs border border-[#E7D7C1] flex items-center gap-1.5 shadow-sm group-hover:bg-[#4A1521] group-hover:text-white transition-colors">
                    <BookOpen className="w-3 h-3 text-[#9E7B4F] group-hover:text-white" />
                    <span>Read Book</span>
                  </div>
                </div>

                {/* Editorial Body Content (strictly descriptive paragraph, NO bullet points) */}
                <div className="p-5 sm:p-6 space-y-2.5 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9E7B4F] block">
                    {cat.tagline || 'Signature Suite'}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] group-hover:text-[#4A1521] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#F4EFEB] mt-2 flex items-center justify-between text-xs font-semibold text-[#4A1521] group-hover:text-[#310D15]">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#9E7B4F]" />
                  <span>Open Book Viewer</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
