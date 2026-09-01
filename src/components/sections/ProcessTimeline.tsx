import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, CheckSquare, PackageCheck } from 'lucide-react';
import { processSteps } from '../../config/siteConfig';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

interface ProcessTimelineProps {
  onOpenBookNow: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBookNow }) => {
  const stepIcons = [Palette, Sparkles, CheckSquare, PackageCheck];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EASY & ERROR-FREE ORDERING"
          title="Our Seamless 4-Step Card Printing Process"
          subtitle="From browsing 2,000+ card models to custom typesetting and precision printing by Senthil Prints."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative"
        >
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative bg-[#FFFFFF] p-7 rounded-xs border border-[#E7D7C1] hover:border-[#C5A880] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-light text-[#4A1521]/40 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F4EFEB] text-[#4A1521] flex items-center justify-center border border-[#E7D7C1]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9E7B4F] block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1C1917] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed font-light mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F4EFEB]">
                  <span className="text-[11px] text-[#4A1521] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                    {step.deliverable}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Action CTA */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBookNow}
            rightIcon={<Sparkles className="w-4 h-4" />}
          >
            Start Your Custom Card Journey
          </Button>
        </div>
      </div>
    </section>
  );
};
