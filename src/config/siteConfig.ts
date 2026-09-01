import { CardShowcaseItem, ServiceItem, TestimonialItem, ProcessStep } from '../types';
import { siteContent } from './siteContent';

export const siteConfig = {
  name: 'Subham Cards',
  tradeName: siteContent.business.tradeName,
  tagline: siteContent.business.tagline,
  description: siteContent.business.fullDescription,
  email: siteContent.business.email,
  phone: siteContent.business.phones.primaryDisplay,
  phoneClean: siteContent.business.phones.primaryClean,
  landline: siteContent.business.phones.landline,
  mobile1: siteContent.business.phones.mobile1,
  mobile2: siteContent.business.phones.mobile2,
  mobile3: siteContent.business.phones.mobile3,
  whatsapp: siteContent.business.phones.whatsappClean,
  whatsappDisplay: siteContent.business.phones.whatsapp,
  address: {
    street: siteContent.business.address.line1,
    area: siteContent.business.address.line2,
    landmark: siteContent.business.address.landmark,
    city: siteContent.business.address.city,
    state: siteContent.business.address.state,
    zip: siteContent.business.address.pincode,
    country: siteContent.business.address.country,
    full: `${siteContent.business.address.line1}, ${siteContent.business.address.line2}, ${siteContent.business.address.city} - ${siteContent.business.address.pincode}, ${siteContent.business.address.state}, ${siteContent.business.address.country}`,
  },
  businessHours: siteContent.business.businessHours,
  sisterConcern: siteContent.business.sisterConcern.name,
  sisterConcernDetails: siteContent.business.sisterConcern,
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    whatsapp: `https://wa.me/${siteContent.business.phones.whatsappClean}`,
  },
  stats: siteContent.business.stats,
};

export const trustHighlights = siteContent.trustHighlights;
export const servicesData: ServiceItem[] = siteContent.services;
export const whyChooseUsReasons = siteContent.whyChooseUs;
export const processSteps: ProcessStep[] = siteContent.processSteps;
export const heroWeddingCards = siteContent.heroCards;
export const testimonialsData: TestimonialItem[] = siteContent.testimonials;
export const faqsData = siteContent.faqs;

// Export backwards-compatible legacy card showcase data if referenced anywhere
export const cardShowcaseData: CardShowcaseItem[] = [
  {
    id: 'subham-card-01',
    title: 'The Royal Wedding Folio',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    description: 'Exclusive multi-fold gold foil wedding invitation with traditional motifs and auspicious Shloka engravings.',
    paperType: 'Metallic Pearlized Board & Rich Velvet Finish',
    finishDetails: ['Hot Gold Foil Stamping', 'Multi-Level Embossed Deity', 'Matching Envelope'],
    dimensions: '6" x 9" Multi-Fold',
    priceEstimate: 'Wholesale & Retail Rates',
    tags: ['Wedding', 'Gold Foil', 'Multi-Fold', 'Traditional'],
    featured: true,
  },
  {
    id: 'subham-card-02',
    title: 'Grahapravesam Heritage Suite',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
    description: 'Auspicious housewarming card with Kalasam and temple toran artwork with custom Tamil and English text.',
    paperType: 'Textured Eco-Friendly Paperboard',
    finishDetails: ['Kalasam Gold Inks', 'Embossed Border', 'Custom Map Printing'],
    dimensions: '5" x 7" Folded',
    priceEstimate: 'Affordable Rates',
    tags: ['Grahapravesam', 'Housewarming', 'Kalasam', 'Tamil Wording'],
    featured: true,
  },
  {
    id: 'subham-card-03',
    title: 'Grand Betrothal & Engagement Card',
    category: 'Modern',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
    description: 'Pastel laser-cut card with silk ribbon accents for Nichayathartham and Ring Ceremony.',
    paperType: 'Pearlized Pastel Board (350 GSM)',
    finishDetails: ['Laser Filigree', 'Foil Stamping', 'Pastel Die-Cut'],
    dimensions: '5.5" x 7.5" Folio',
    priceEstimate: 'Budget to Luxury',
    tags: ['Engagement', 'Betrothal', 'Laser-Cut', 'Pastel'],
    featured: true,
  },
];
