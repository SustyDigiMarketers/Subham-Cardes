import React, { useState } from 'react';
import { Page } from '../types';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustHighlights } from '../components/sections/TrustHighlights';
import { AboutPreview } from '../components/sections/AboutPreview';
import { ServicesPreview } from '../components/sections/ServicesPreview';
import { CeremonyCategoriesSection } from '../components/sections/CeremonyCategoriesSection';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { InvitationBookViewer } from '../components/modals/InvitationBookViewer';
import { ceremonyCardsBooksData } from '../config/ceremonyCardsData';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenBookNow: (service?: string, cardStyle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookNow,
}) => {
  const [selectedBookSlug, setSelectedBookSlug] = useState<string | null>(null);

  const handleOpenBookViewer = (slug: string) => {
    setSelectedBookSlug(slug);
  };

  const handleCloseBookViewer = () => {
    setSelectedBookSlug(null);
  };

  const activeBookData = selectedBookSlug
    ? ceremonyCardsBooksData[selectedBookSlug] || ceremonyCardsBooksData['wedding-cards']
    : null;

  return (
    <div className="w-full">
      {/* 01: Hero */}
      <HeroSection
        onOpenBookNow={(service, cardStyle) => onOpenBookNow(service, cardStyle)}
        onViewCollection={() => {
          const el = document.getElementById('invitation-categories') || document.getElementById('services-preview');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            onNavigate('services');
          }
        }}
      />

      {/* 02: Trust Highlights */}
      <TrustHighlights />

      {/* 03: About Preview */}
      <AboutPreview
        onDiscoverStory={() => onNavigate('about')}
        onOpenBookNow={() => onOpenBookNow()}
      />

      {/* 04: Primary Business Services (Subham Cards & Senthil Prints) */}
      <ServicesPreview
        onSelectService={(serviceTitle) => onOpenBookNow(serviceTitle)}
        onViewAllServices={() => onNavigate('services')}
      />

      {/* 05: Ceremony Invitation Categories (8 Categories with 3D Book Viewer) */}
      <CeremonyCategoriesSection onOpenBookViewer={handleOpenBookViewer} />

      {/* 06: Why Choose Us */}
      <WhyChooseUs />

      {/* 07: Process Timeline */}
      <ProcessTimeline onOpenBookNow={() => onOpenBookNow()} />

      {/* 08: Testimonials (With [ 01 ] [ 02 ] buttons & no avatars) */}
      <TestimonialsSection />

      {/* 09: Final CTA */}
      <FinalCTASection onOpenBookNow={() => onOpenBookNow()} />

      {/* 10: 3D Digital Invitation Book Viewer Modal */}
      <InvitationBookViewer
        isOpen={Boolean(selectedBookSlug)}
        onClose={handleCloseBookViewer}
        bookData={activeBookData}
        onBookThisStyle={(styleName) => onOpenBookNow(undefined, styleName)}
      />
    </div>
  );
};
