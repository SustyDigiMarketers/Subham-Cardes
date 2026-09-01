import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';
import { trustHighlights } from '../../config/siteConfig';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

export const TrustHighlights: React.FC = () => {
  const icons = [Sparkles, Layers, HeartHandshake, ShieldCheck];

  return (
    <section className="py-14 sm:py-16 bg-[#F4EFEB] border-y border-[#E7D7C1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustHighlights.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-[#FAF8F5] p-6 rounded-xs border border-[#E7D7C1] hover:border-[#C5A880] transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xs bg-[#4A1521]/10 text-[#4A1521] flex items-center justify-center group-hover:bg-[#4A1521] group-hover:text-[#FAF8F5] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9E7B4F] bg-[#F4EFEB] px-2 py-0.5 rounded-xs border border-[#E7D7C1]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-[#1C1917] font-semibold pt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
