import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight, Printer, Layers } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

interface ServicesPreviewProps {
  onSelectService: (serviceTitle: string) => void;
  onViewAllServices?: () => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  const primaryServices = [
    {
      id: 'subham-cards-wholesaler',
      businessName: 'Subham Cards',
      category: 'Cards Wholesaler',
      tagline: 'Leading Invitation Card Wholesaler & Retailer',
      description:
        'We are a leading card wholesaler in Trichy. We offer a wide variety of invitation cards for family functions, business functions and ceremonies, including weddings, betrothal, Grahapravesam, birthdays, Upanayanam, puberty ceremonies, jubilees, Sashtiapthapoorthi, Sadhabishekam, inaugurations, Arangetram, brochures and corporate printing.',
      highlights: [
        '2000+ Varieties of Cards',
        'All Types of Invitation Cards',
        'New Designs',
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
      tagline: 'Sister Concern • In-House Press & Creative Designing',
      description:
        'Senthil Prints is the sister concern of Subham Cards. We undertake all kinds of printing works and professional designing services. Since 2000, we have been providing a wide range of printing services including invitation card printing, visiting cards, books, bill books, notices, posters, stickers, notebooks and more.',
      highlights: [
        'Highly Qualified Paper',
        'Eco-Friendly Papers',
        'Innovative, Traditional & Attractive Designs',
      ],
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      badge: 'Since 2000',
      icon: Printer,
      serviceQuoteParam: 'Senthil Prints - Printing & Designing',
    },
  ];

  return (
    <section
      id="services-preview"
      className="py-20 sm:py-28 bg-[#F4EFEB] border-t border-[#E7D7C1] scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="OUR PRIMARY BUSINESS SERVICES"
          title="Two Complementary Offerings Under One Roof"
          subtitle="Subham Cards brings you Tamil Nadu’s most extensive wholesale invitation catalog, while our sister concern Senthil Prints powers complete in-house printing & designing."
        />

        {/* 2 Primary Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-14"
        >
          {primaryServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="bg-[#FAF8F5] rounded-xs border border-[#E7D7C1] hover:border-[#C5A880] transition-all duration-300 hover:shadow-2xl group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#1C1917]">
                    <img
                      src={service.image}
                      alt={`${service.businessName} - ${service.category}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-[#1C1917]/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="bg-[#4A1521] text-[#FAF8F5] text-xs font-mono px-3 py-1 rounded-xs flex items-center gap-1.5 shadow-md">
                        <IconComponent className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>Service 0{idx + 1}</span>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md text-[#4A1521] border border-[#E7D7C1] text-xs font-bold px-3 py-1 rounded-xs shadow-md">
                      {service.badge}
                    </div>

                    {/* Bottom Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-1">
                        {service.category}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {service.businessName}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-5 text-left">
                    <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* 3 Key Highlights with checkmarks */}
                    <div className="pt-3 border-t border-[#E7D7C1] space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] block">
                        Key Highlights:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {service.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-[#24211E] font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#9E7B4F] shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-8 pt-0 border-t border-[#F4EFEB] mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onSelectService(service.serviceQuoteParam)}
                    className="w-full sm:w-auto shadow-md text-xs sm:text-sm py-2.5 px-5"
                    rightIcon={<Sparkles className="w-4 h-4" />}
                  >
                    Inquire About {service.businessName}
                  </Button>

                  {onViewAllServices && (
                    <button
                      onClick={onViewAllServices}
                      className="text-xs font-semibold text-[#4A1521] hover:text-[#310D15] flex items-center gap-1.5 hover:underline cursor-pointer"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
