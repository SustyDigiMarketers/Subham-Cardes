import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Instagram,
  Heart,
} from 'lucide-react';
import { Page } from '../../types';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { FiligreeDivider } from '../ui/SectionHeading';
import { generateQuickWhatsAppLink } from '../../services/enquiryService';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenBookNow: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookNow }) => {
  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] relative overflow-hidden border-t border-[#C5A880]/30 pt-16 pb-12">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#C5A880]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-serif text-3xl font-normal tracking-wide text-[#FAF8F5]">
                {siteConfig.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] mt-0.5 font-medium">
                Wedding & Invitation Cards • Trichy
              </span>
            </div>
            <p className="text-xs text-[#E7D7C1]/80 leading-relaxed font-light">
              Over 2,000 varieties of ready-made, exclusive, and customized wedding cards, betrothal, housewarming, and ceremony invitations with in-house printing by Senthil Prints.
            </p>
            <div className="pt-2">
              <Button
                variant="gold"
                size="sm"
                onClick={() => onOpenBookNow()}
                rightIcon={<Sparkles className="w-3.5 h-3.5" />}
              >
                Book Your Cards
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#E7D7C1]/80">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home & 2000+ Cards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Subham Cards & Senthil Prints
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Card Categories & Printing Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Showroom Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBookNow()}
                  className="text-[#C5A880] font-semibold hover:underline cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Inquire / Get Quote</span> →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Print Specialties */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Ceremony Specialties
            </h4>
            <ul className="space-y-2 text-xs text-[#E7D7C1]/80 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                <span>Wedding & Reception Invitation Suites</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                <span>Betrothal & Nichayathartham Cards</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                <span>Grahapravesam (Housewarming) Cards</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                <span>Sashtiapthapoorthi & Sadhabishekam Cards</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                <span>Upanayanam & Puberty Ceremony Cards</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />
                <span>Senthil Prints: Visiting Cards & Bill Books</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Atelier Hours */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Showroom & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#E7D7C1]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>2, Aravind Plaza, Near GRT Jewellers, Fort Station Road, Trichy - 620002</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${siteConfig.phoneClean}`} className="hover:text-white transition-colors">
                  0431 4021000 / {siteConfig.mobile1}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={generateQuickWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Sat: 9:30 AM – 9:00 PM</p>
                  <p>Sun: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FiligreeDivider color="#C5A880" />

        {/* Bottom Credits & Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E7D7C1]/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Handcrafted with reverence.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hover:text-[#FAF8F5] transition-colors"
            >
              Privacy & Printing Policy
            </button>
            <button
              onClick={() => onOpenBookNow()}
              className="hover:text-[#FAF8F5] transition-colors"
            >
              Book Now
            </button>
            <a
              href={generateQuickWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
