import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Clock, Layers, ArrowRight, Printer, ShieldCheck } from 'lucide-react';
import { SectionHeading, FiligreeDivider } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { fadeUp, staggerContainer } from '../utils/motionVariants';

interface ServicesPageProps {
  onBookService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBookService }) => {
  const primaryServices = [
    {
      id: 'subham-cards-wholesaler',
      businessName: 'Subham Cards',
      category: 'Cards Wholesaler',
      tagline: 'Leading Invitation Card Wholesaler & Retailer in Trichy',
      description:
        'We are a leading card wholesaler in Trichy. We offer a wide variety of invitation cards for family functions, business functions and ceremonies, including weddings, betrothal, Grahapravesam, birthdays, Upanayanam, puberty ceremonies, jubilees, Sashtiapthapoorthi, Sadhabishekam, inaugurations, Arangetram, brochures and corporate printing.',
      highlights: [
        '2000+ Varieties of Cards',
        'All Types of Invitation Cards',
        'New Designs',
      ],
      details: [
        'Massive in-stock collection of over 2000+ ready-made & customizable designs',
        'Traditional Hindu, Muslim, Christian & interfaith cultural collections',
        'Specialty finishes including hot foil stamping, embossing, velvet touch & laser-cut filigree',
        'Direct wholesaler manufacturer rates for both small retail & bulk family orders',
      ],
      image:
        'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
      badge: '2000+ Varieties',
      icon: Layers,
      serviceQuoteParam: 'Subham Cards - Cards Wholesaler',
    },
    {
      id: 'senthil-prints-printing',
      businessName: 'Senthil Prints',
      category: 'Printing & Designing',
      tagline: 'Sister Concern of Subham Cards • Established Since 2000',
      description:
        'Senthil Prints is the sister concern of Subham Cards. We undertake all kinds of printing works and professional designing services. Since 2000, we have been providing a wide range of printing services including invitation card printing, visiting cards, books, bill books, notices, posters, stickers, notebooks and more.',
      highlights: [
        'Highly Qualified Paper',
        'Eco-Friendly Papers',
        'Innovative, Traditional & Attractive Designs',
      ],
      details: [
        'Professional DTP typesetting in Tamil, English and multilingual formats',
        'High-precision offset printing, gold foil leaf stamping, screen printing & UV spot finishes',
        'Eco-friendly textured paper stocks, metallic boards & handmade parchment papers',
        'Fast turnaround with strict quality inspection before final auspicious ceremony handover',
      ],
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      badge: 'Since 2000',
      icon: Printer,
      serviceQuoteParam: 'Senthil Prints - Printing & Designing',
    },
  ];

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4EFEB] border border-[#E7D7C1] rounded-xs text-xs font-semibold uppercase tracking-[0.2em] text-[#4A1521]">
          <Sparkles className="w-3.5 h-3.5 text-[#9E7B4F]" />
          <span>Tailored Business Services</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-normal leading-[1.12]">
          Our Primary Business <span className="italic text-[#4A1521]">Offerings.</span>
        </h1>

        <FiligreeDivider />

        <p className="text-base sm:text-xl text-[#57534E] font-light leading-relaxed max-w-3xl mx-auto">
          Subham Cards operates as a premier invitation card wholesaler in Trichy with 2000+ card varieties, seamlessly coupled with complete in-house printing & designing by our sister concern Senthil Prints.
        </p>
      </section>

      {/* 2. Flagship Services Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 gap-12 sm:gap-16">
          {primaryServices.map((service, idx) => {
            const isEven = idx % 2 === 1;
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="bg-white rounded-xs border border-[#E7D7C1] hover:border-[#C5A880] p-6 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image (5 cols) */}
                <div
                  className={`lg:col-span-5 relative aspect-[4/3] rounded-xs overflow-hidden bg-[#1C1917] ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={`${service.businessName} - ${service.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#4A1521] text-white text-xs font-mono px-3 py-1 rounded-xs flex items-center gap-1.5 shadow-md">
                    <IconComponent className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Service 0{idx + 1}</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md text-[#4A1521] border border-[#E7D7C1] text-xs font-bold px-3 py-1 rounded-xs shadow-md">
                    {service.badge}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-left">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A880] block">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {service.businessName}
                    </h3>
                  </div>
                </div>

                {/* Content Details (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-5 text-left ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7B4F] block">
                      {service.tagline}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] mt-1">
                      {service.businessName}
                    </h2>
                    <span className="inline-block mt-1.5 px-3 py-0.5 bg-[#F4EFEB] border border-[#E7D7C1] rounded-xs text-xs font-semibold text-[#4A1521]">
                      {service.category}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* 3 Key Highlights */}
                  <div className="p-4 bg-[#FAF8F5] rounded-xs border border-[#E7D7C1] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] block">
                      Key Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {service.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs font-semibold text-[#24211E]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#9E7B4F] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Inclusions */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F4EFEB]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] block mb-2">
                      Service Capabilities:
                    </span>
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#57534E]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#4A1521] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-3">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => onBookService(service.serviceQuoteParam)}
                      rightIcon={<Sparkles className="w-4 h-4" />}
                    >
                      Inquire About {service.businessName}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
