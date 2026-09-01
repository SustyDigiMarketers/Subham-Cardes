import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { generateQuickWhatsAppLink } from '../../services/enquiryService';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF8F5] text-[#1C1917] px-3.5 py-2 rounded-md shadow-xl border border-[#E7D7C1] text-xs animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-medium">Stationery Concierge Online</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#78716C] hover:text-[#1C1917] ml-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={generateQuickWhatsAppLink('Hello Velvet & Vow! I would like to inquire about wedding card designs and printing pricing.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#1FB855] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <WhatsAppIcon className="w-7 h-7 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
};
