import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, HeartHandshake, ShieldCheck, Printer, Layers, Compass, Check, MapPin, Phone } from 'lucide-react';
import { SectionHeading, FiligreeDivider } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../config/siteConfig';
import { fadeUp, staggerContainer } from '../utils/motionVariants';

interface AboutPageProps {
  onOpenBookNow: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBookNow }) => {
  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF8F5]">
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4EFEB] border border-[#E7D7C1] rounded-xs text-xs font-semibold uppercase tracking-[0.2em] text-[#4A1521]">
          <Sparkles className="w-3.5 h-3.5 text-[#9E7B4F]" />
          <span>Heritage & Printing Excellence</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-normal leading-[1.12]">
          Trichy’s Premier Destination For{' '}
          <span className="italic text-[#4A1521]">Wedding & Auspicious Cards.</span>
        </h1>

        <FiligreeDivider />

        <p className="text-base sm:text-xl text-[#57534E] font-light leading-relaxed max-w-3xl mx-auto">
          Over 2,000 varieties of ready-made, exclusive, and customized cards backed by complete in-house designing and printing from our sister concern, Senthil Prints.
        </p>
      </section>

      {/* 2. Large Editorial Showroom & Printing Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-xs overflow-hidden shadow-2xl border border-[#E7D7C1] aspect-[21/9] bg-[#1C1917]">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1600&auto=format&fit=crop"
            alt="Subham Cards wedding invitation collection and printing press"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-transparent to-transparent flex items-end p-6 sm:p-12">
            <div className="text-[#FAF8F5] max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                Fort Station Road, Trichy
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl mt-1">
                2, Aravind Plaza — The Largest Card Showroom in Tiruchirappalli
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story & Senthil Prints Partnership */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B4F]">
              OUR HERITAGE & PARTNERSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] leading-tight">
              Two Decades of Trust, Tradition & Flawless Printing
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed font-light">
              Subham Cards is widely recognized as one of the leading wedding and invitation card dealers in Trichy and surrounding districts of Tamil Nadu. We offer families an unmatched showroom experience featuring over 2,000 distinct card models—from classic devotional Tamil designs to luxurious multi-fold gold-foiled suites.
            </p>
            <p className="text-sm text-[#57534E] leading-relaxed font-light">
              With our sister concern <strong className="text-[#1C1917] font-semibold">Senthil Prints</strong>, we manage every step of production in-house: bilingual Tamil/English DTP typesetting, auspicious Muhurtham text alignment, multi-color offset printing, hot foil stamping, screen printing, embossing, and UV spot finishing.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="relative border border-[#E7D7C1] p-3 rounded-xs bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
                alt="Subham Cards auspicious ceremony cards"
                className="w-full h-80 object-cover rounded-xs"
              />
              <div className="mt-3 text-center">
                <span className="text-xs font-serif italic text-[#78716C]">
                  "An invitation is an auspicious blessing invoking grace for your family milestone."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Core Pillars */}
      <section className="bg-[#F4EFEB] py-20 border-y border-[#E7D7C1] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE SUBHAM PROMISE"
            title="Our Four Pillars of Customer Trust"
            subtitle="The fundamental commitments that guide our service to over 15,000+ satisfied families across Tamil Nadu."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: '2,000+ Card Catalog',
                icon: Layers,
                description:
                  'The widest selection of wedding, betrothal, housewarming, Upanayanam, and milestone cards under one roof.',
              },
              {
                title: 'Senthil Prints In-House',
                icon: Printer,
                description:
                  'Direct printing unit with zero middlemen, guaranteeing sharp typography, deep gold foil, and rapid proofing turnaround.',
              },
              {
                title: 'Transparent Pricing',
                icon: ShieldCheck,
                description:
                  'From budget-friendly ready-made cards to opulent luxury suites, all offered at genuine wholesale and retail rates.',
              },
              {
                title: 'Courteous & Polite Team',
                icon: HeartHandshake,
                description:
                  'Our experienced partners and staff guide families patiently through wording, auspicious formats, and custom proofs.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] p-6 rounded-xs border border-[#E7D7C1] shadow-sm space-y-3 text-left"
                >
                  <div className="w-11 h-11 rounded-xs bg-[#4A1521] text-[#FAF8F5] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1C1917]">{item.title}</h3>
                  <p className="text-xs text-[#57534E] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Printing Techniques Powered by Senthil Prints */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-12">
        <SectionHeading
          eyebrow="IN-HOUSE PRINT CRAFTSMANSHIP"
          title="Finishing & Printing Capabilities"
          subtitle="Discover the printing technology and artisanal finishes executed by Senthil Prints."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            {
              title: 'Metallic Gold & Copper Foil Stamping',
              desc: 'High-temperature brass dies create gleaming gold, rose gold, and copper foil impressions on deity emblems, names, and border motifs.',
            },
            {
              title: 'Multi-Level Blind Embossing',
              desc: 'Deep dimensional relief pressing on heavy board stock that elevates Kalasam, Nataraja, and floral arch motifs.',
            },
            {
              title: 'Spot UV & Gloss Lamination',
              desc: 'Selective high-gloss coating that creates eye-catching contrast between rich matte textures and shimmering accents.',
            },
            {
              title: 'Commercial Printing & Stationery',
              desc: 'Multi-color visiting cards, business bill books, receipt books, letterheads, flyers, and eco-friendly paper stationery.',
            },
          ].map((tech, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xs border border-[#E7D7C1] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9E7B4F]">
                Process 0{idx + 1}
              </span>
              <h4 className="font-serif text-xl text-[#1C1917] font-semibold">{tech.title}</h4>
              <p className="text-xs text-[#57534E] leading-relaxed font-light">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Showroom CTA Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#4A1521] text-[#FAF8F5] p-8 sm:p-12 rounded-xs border border-[#C5A880]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Visit Subham Cards Trichy
            </span>
            <h3 className="font-serif text-3xl text-[#FAF8F5]">
              Experience 2,000+ Card Varieties In Person
            </h3>
            <p className="text-xs text-[#E7D7C1]/80 leading-relaxed font-light">
              Visit our showroom at 2, Aravind Plaza, Near GRT Jewellers, Fort Station Road, Trichy. Our team will guide you through sample designs, auspicious wording, and competitive wholesale quotes.
            </p>
          </div>
          <Button
            variant="gold"
            size="lg"
            onClick={onOpenBookNow}
            rightIcon={<Sparkles className="w-4 h-4" />}
          >
            Inquire / Book Now
          </Button>
        </div>
      </section>
    </div>
  );
};
