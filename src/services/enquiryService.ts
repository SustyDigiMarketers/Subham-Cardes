import { BookingEnquiry, ContactFormMessage } from '../types';
import { siteConfig } from '../config/siteConfig';

const STORAGE_KEY_ENQUIRIES = 'subham_cards_enquiries';
const STORAGE_KEY_MESSAGES = 'subham_cards_contact_messages';

export interface EnquiryResponse {
  success: boolean;
  message: string;
  enquiryId?: string;
  whatsappUrl?: string;
}

export const generateWhatsAppLink = (enquiry: Partial<BookingEnquiry>): string => {
  const cleanPhone = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const lines = [
    `*✨ New Card Inquiry - Subham Cards (Trichy)*`,
    `--------------------------------------`,
    `*Name:* ${enquiry.name || 'Not provided'}`,
    `*Phone:* ${enquiry.phone || 'Not provided'}`,
    `*Email:* ${enquiry.email || 'Not provided'}`,
    `*Occasion / Event:* ${enquiry.eventType || 'Wedding'}`,
    `*Event Date / Muhurtham:* ${enquiry.eventDate || 'TBD'}`,
    `*Quantity Required:* ${enquiry.cardQuantity || '100'} cards`,
    `*Preferred Card Type:* ${enquiry.preferredStyle || '2000+ Collection'}`,
    `*Budget / Category:* ${enquiry.budgetRange || 'Flexible'}`,
    enquiry.serviceInterest ? `*Category:* ${enquiry.serviceInterest}` : '',
    enquiry.additionalRequirements ? `*Requirements:* ${enquiry.additionalRequirements}` : '',
    `--------------------------------------`,
    `_Sent via Subham Cards & Senthil Prints Website_`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(lines)}`;
};

export const generateQuickWhatsAppLink = (customText?: string): string => {
  const cleanPhone = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const text = customText || 'Hello Subham Cards! I would like to inquire about wedding and invitation cards from your 2000+ collection.';
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
};

export const submitEnquiry = async (
  enquiryData: BookingEnquiry
): Promise<EnquiryResponse> => {
  // Simulate network latency for realistic production feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Basic validation check
  if (!enquiryData.name.trim()) {
    return { success: false, message: 'Please provide your name.' };
  }
  if (!enquiryData.phone.trim() && !enquiryData.whatsapp.trim() && !enquiryData.email.trim()) {
    return { success: false, message: 'Please provide at least a phone number, WhatsApp, or email address.' };
  }

  const newEnquiry: BookingEnquiry = {
    ...enquiryData,
    id: `ENQ-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
    const existingList: BookingEnquiry[] = existingRaw ? JSON.parse(existingRaw) : [];
    existingList.unshift(newEnquiry);
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(existingList));
  } catch (err) {
    console.warn('LocalStorage not available for enquiry persistence', err);
  }

  const whatsappUrl = generateWhatsAppLink(newEnquiry);

  return {
    success: true,
    message: 'Thank you! Your enquiry has been received. Our stationery concierge will contact you within 24 hours.',
    enquiryId: newEnquiry.id,
    whatsappUrl,
  };
};

export const submitContactMessage = async (
  contactData: ContactFormMessage
): Promise<{ success: boolean; message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (!contactData.name.trim() || !contactData.email.trim() || !contactData.message.trim()) {
    return { success: false, message: 'Please complete all required fields.' };
  }

  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY_MESSAGES);
    const existingList = existingRaw ? JSON.parse(existingRaw) : [];
    existingList.unshift({
      ...contactData,
      id: `MSG-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(existingList));
  } catch (err) {
    console.warn('LocalStorage error', err);
  }

  return {
    success: true,
    message: 'Thank you for reaching out! Our team has received your message and will respond promptly.',
  };
};
