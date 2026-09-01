import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { siteConfig } from './config/siteConfig';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { BookNowModal } from './components/modals/BookNowModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string>('');
  const [modalInitialStyle, setModalInitialStyle] = useState<string>('');

  // Handle URL hash, pathname, and query redirects
  useEffect(() => {
    const detectPage = () => {
      // 1. Check for query parameter redirect from 404.html (e.g. /?p=/about or /?page=about)
      const urlParams = new URLSearchParams(window.location.search);
      const queryPage = urlParams.get('p') || urlParams.get('page');
      if (queryPage) {
        const cleanQuery = queryPage.replace('/', '').toLowerCase() as Page;
        if (['home', 'about', 'services', 'contact'].includes(cleanQuery)) {
          setCurrentPage(cleanQuery);
          // Clean up search query in URL without reload
          const newUrl = window.location.pathname + (cleanQuery === 'home' ? '' : `#${cleanQuery}`);
          window.history.replaceState(null, '', newUrl);
          return;
        }
      }

      // 2. Check for hash (e.g. #about, #services)
      const hash = window.location.hash.replace('#', '').toLowerCase() as Page;
      if (['home', 'about', 'services', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        return;
      }

      // 3. Check for path (e.g. /about, /services, /contact)
      const path = window.location.pathname.replace(/^\/+/g, '').replace(/\/+$/g, '').toLowerCase() as Page;
      if (['home', 'about', 'services', 'contact'].includes(path)) {
        setCurrentPage(path);
        return;
      }

      setCurrentPage('home');
    };

    detectPage();
    window.addEventListener('hashchange', detectPage);
    window.addEventListener('popstate', detectPage);
    return () => {
      window.removeEventListener('hashchange', detectPage);
      window.removeEventListener('popstate', detectPage);
    };
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookNow = (service?: string, cardStyle?: string) => {
    setModalInitialService(service || '');
    setModalInitialStyle(cardStyle || '');
    setIsBookNowOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#24211E] selection:bg-[#4A1521] selection:text-[#FAF8F5]">
      {/* Structured SEO Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: siteConfig.name,
            description: siteConfig.description,
            telephone: siteConfig.phoneClean,
            email: siteConfig.email,
            url: 'https://subhamcards.com/',
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.zip,
              addressCountry: 'IN',
            },
            priceRange: '₹₹',
            openingHours: 'Mo-Sa 09:30-21:00, Su 10:00-14:00',
            image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200',
          }),
        }}
      />

      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookNow={() => handleOpenBookNow()}
      />

      {/* Main Page Viewport */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookNow={handleOpenBookNow}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onOpenBookNow={() => handleOpenBookNow()} />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onBookService={(serviceTitle) =>
              handleOpenBookNow(serviceTitle, undefined)
            }
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onOpenBookNow={() => handleOpenBookNow()} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookNow={() => handleOpenBookNow()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />

      {/* Centralized Book Now Popup / Modal */}
      <BookNowModal
        isOpen={isBookNowOpen}
        onClose={() => setIsBookNowOpen(false)}
        initialService={modalInitialService}
        initialCardStyle={modalInitialStyle}
      />
    </div>
  );
}
