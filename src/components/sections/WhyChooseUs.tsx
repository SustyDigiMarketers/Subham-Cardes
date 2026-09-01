import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Printer, Palette, HeartHandshake, ShieldCheck, Layers } from 'lucide-react';
import { whyChooseUsReasons } from '../../config/siteConfig';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Printer,
    Palette,
    HeartHandshake,
    ShieldCheck,
    Layers,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#1C1917] text-[#FAF8F5] relative overflow-hidden border-y border-[#C5A880]/30">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A1521]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          dark
          eyebrow="WHY CHOOSE SUBHAM CARDS"
          title="2,000+ Designs. In-House Printing. Trusted Quality."
          subtitle="Every invitation we create is crafted with reverence, precision printing by Senthil Prints, and guaranteed on-time delivery for your sacred ceremonies."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
        >
          {whyChooseUsReasons.map((reason, idx) => {
            const Icon = iconMap[reason.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-[#2D2A26]/80 p-8 rounded-xs border border-[#C5A880]/25 hover:border-[#C5A880] transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xs bg-[#4A1521] text-[#E7D7C1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[#C5A880]/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#C5A880]/60">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#FAF8F5] pt-2">
                    {reason.title}
                  </h3>

                  <p className="text-xs text-[#E7D7C1]/80 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#C5A880]/15 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-medium">
                    Subham Cards Quality
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
