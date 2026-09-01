export type Page = 'home' | 'about' | 'services' | 'contact';

export type CardCategory =
  | 'All'
  | 'Traditional'
  | 'Premium'
  | 'Modern'
  | 'Minimal'
  | 'Luxury'
  | 'Custom';

export interface CardShowcaseItem {
  id: string;
  title: string;
  category: Exclude<CardCategory, 'All'>;
  image: string;
  additionalImages?: string[];
  description: string;
  paperType: string;
  finishDetails: string[];
  dimensions: string;
  priceEstimate: string;
  tags: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  turnaroundTime: string;
  minOrder: string;
  priceStartingFrom: string;
  popularFinishes: string[];
}

export interface TestimonialItem {
  id: string;
  coupleName: string;
  eventType: string;
  eventDate: string;
  rating: number;
  review: string;
  image: string;
  cardChosen: string;
  city: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface BookingEnquiry {
  id?: string;
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate: string;
  cardQuantity: string;
  preferredStyle: string;
  budgetRange: string;
  serviceInterest?: string;
  additionalRequirements?: string;
  referenceFileUrl?: string;
  referenceFileName?: string;
  createdAt?: string;
}

export interface ContactFormMessage {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface CeremonyCategoryItem {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  tagline?: string;
}

export interface CeremonyCardPage {
  pageNumber: number;
  pageType: 'cover' | 'spread-left' | 'spread-right' | 'back';
  pageLabel: string;
  image: string;
  heading?: string;
  caption?: string;
}

export interface CeremonyCardBook {
  id: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  description: string;
  finishType: string;
  dimensions: string;
  paperStock: string;
  pages: CeremonyCardPage[];
}
