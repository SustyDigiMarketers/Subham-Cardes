import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { Page } from '../../types';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { generateQuickWhatsAppLink } from '../../services/enquiryService';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenBookNow: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBookNow,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E7D7C1]/80 py-3.5'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-4.5 sm:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - 2x visual size while preserving compact navbar height */}
        <button
          onClick={() => handleNavClick('home')}
          className="group h-10 sm:h-12 flex items-center text-left cursor-pointer focus:outline-none relative overflow-visible"
          aria-label="Subham Cards Home"
        >
          <img
            src="/logo.png"
            alt="Subham Cards"
            className="h-16 sm:h-20 md:h-24 w-auto max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors cursor-pointer rounded-xs ${
                  isActive
                    ? 'text-[#4A1521] font-semibold'
                    : 'text-[#57534E] hover:text-[#4A1521] font-medium'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#4A1521] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={generateQuickWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#1C1917] hover:text-[#25D366] px-3 py-2 flex items-center gap-1.5 transition-colors"
            title="Chat directly on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpenBookNow()}
            rightIcon={<Sparkles className="w-3.5 h-3.5" />}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="primary"
            size="sm"
            className="text-xs px-3 py-1.5"
            onClick={() => onOpenBookNow()}
          >
            Book
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#1C1917] hover:text-[#4A1521] rounded-xs cursor-pointer focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7D7C1] px-6 py-5 shadow-xl transition-all duration-300 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2.5 text-base tracking-wide border-b border-[#F4EFEB] ${
                    isActive
                      ? 'text-[#4A1521] font-bold pl-2 border-l-2 border-l-[#4A1521]'
                      : 'text-[#57534E]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 flex flex-col space-y-2.5">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookNow();
                }}
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Book Now
              </Button>

              <a
                href={generateQuickWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                  leftIcon={<WhatsAppIcon className="w-4 h-4" />}
                >
                  WhatsApp Concierge
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
