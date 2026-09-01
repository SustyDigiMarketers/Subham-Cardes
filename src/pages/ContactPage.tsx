import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading, FiligreeDivider } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { Input, Textarea } from '../components/ui/FormControls';
import { ContactFormMessage } from '../types';
import { submitContactMessage, generateQuickWhatsAppLink } from '../services/enquiryService';
import { fadeUp } from '../utils/motionVariants';

interface ContactPageProps {
  onOpenBookNow: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBookNow }) => {
  const [formData, setFormData] = useState<ContactFormMessage>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormMessage, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide details about your card requirements or questions';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitContactMessage(formData);
      if (res.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setErrors({ general: res.message });
      }
    } catch {
      setErrors({ general: 'Failed to send message. Please try again or reach us on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4EFEB] border border-[#E7D7C1] rounded-xs text-xs font-semibold uppercase tracking-[0.2em] text-[#4A1521]">
          <Sparkles className="w-3.5 h-3.5 text-[#9E7B4F]" />
          <span>Showroom & Inquiries</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-normal leading-[1.12]">
          Visit Our Showroom or{' '}
          <span className="italic text-[#4A1521]">Connect With Us.</span>
        </h1>

        <FiligreeDivider />

        <p className="text-base sm:text-xl text-[#57534E] font-light leading-relaxed max-w-3xl mx-auto">
          Explore over 2,000 card varieties in person at our Trichy showroom, or reach out to our team via WhatsApp, call, or email.
        </p>
      </section>

      {/* 2. Main 2-Column Contact Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Contact Details & Direct CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-[#F4EFEB] p-8 sm:p-10 rounded-xs border border-[#E7D7C1] text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B4F]">
                SHOWROOM & CONTACT
              </span>
              <h2 className="font-serif text-3xl text-[#1C1917]">
                {siteConfig.name}
              </h2>
              <p className="text-xs text-[#78716C]">Sister Concern: {siteConfig.sisterConcern}</p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 text-sm text-[#57534E]">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-[#E7D7C1]">
                <MapPin className="w-5 h-5 text-[#4A1521] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Showroom Address
                  </h4>
                  <p className="text-xs mt-0.5 text-[#57534E]">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.landmark}, {siteConfig.address.city} – {siteConfig.address.zip}
                    <br />
                    {siteConfig.address.state}, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-[#E7D7C1]">
                <Phone className="w-5 h-5 text-[#4A1521] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Telephone & Mobile
                  </h4>
                  <div className="text-xs space-y-0.5 mt-0.5">
                    <p>
                      <span className="text-[#78716C]">Landline:</span>{' '}
                      <a href={`tel:${siteConfig.phoneClean}`} className="font-semibold text-[#4A1521] hover:underline">
                        {siteConfig.phone}
                      </a>
                    </p>
                    <p>
                      <span className="text-[#78716C]">Mobile 1:</span>{' '}
                      <a href={`tel:${siteConfig.mobile1.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#4A1521] hover:underline">
                        {siteConfig.mobile1}
                      </a>
                    </p>
                    <p>
                      <span className="text-[#78716C]">Mobile 2:</span>{' '}
                      <a href={`tel:${siteConfig.mobile2.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#4A1521] hover:underline">
                        {siteConfig.mobile2}
                      </a>
                    </p>
                    <p>
                      <span className="text-[#78716C]">Mobile 3:</span>{' '}
                      <a href={`tel:${siteConfig.mobile3.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#4A1521] hover:underline">
                        {siteConfig.mobile3}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-[#E7D7C1]">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    WhatsApp Direct
                  </h4>
                  <a
                    href={generateQuickWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#25D366] hover:underline"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                  <p className="text-[11px] text-[#78716C] mt-0.5">Quick catalog sharing, proofs & quotes</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-[#E7D7C1]">
                <Mail className="w-5 h-5 text-[#4A1521] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs font-semibold text-[#4A1521] hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xs border border-[#E7D7C1]">
                <Clock className="w-5 h-5 text-[#4A1521] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Showroom Timings
                  </h4>
                  <div className="text-xs space-y-0.5 mt-0.5 text-[#78716C]">
                    {siteConfig.businessHours.map((h, idx) => (
                      <p key={idx}>
                        <strong className="text-[#1C1917]">{h.days}:</strong> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 space-y-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={onOpenBookNow}
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Open Full Inquiry Form
              </Button>

              <a
                href={generateQuickWhatsAppLink('Hello Subham Cards! I would like to inquire about wedding cards and printing.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                  leftIcon={<WhatsAppIcon className="w-4 h-4" />}
                >
                  Chat On WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xs border border-[#E7D7C1] shadow-md text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B4F]">
                DIRECT MESSAGE
              </span>
              <h3 className="font-serif text-3xl text-[#1C1917] mt-1 mb-6">
                Send An Inquiry / Request Callback
              </h3>

              {isSuccess ? (
                <div className="bg-[#F4EFEB] border border-[#C5A880] p-8 rounded-xs text-center space-y-4 my-8">
                  <div className="w-14 h-14 bg-[#4A1521] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1C1917]">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-[#57534E] max-w-md mx-auto leading-relaxed font-light">
                    Thank you for reaching out to Subham Cards. Our customer service team will review your inquiry and connect with you shortly with card recommendations and pricing.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errors.general && (
                    <div className="p-3 bg-[#FDF2F2] border border-[#9E2A2B]/30 rounded-xs flex items-center gap-2 text-xs text-[#9E2A2B]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.general}</span>
                    </div>
                  )}

                  <Input
                    label="Your Name"
                    placeholder="e.g., Senthilkumar / Ananya"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    error={errors.name}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone / WhatsApp Number"
                      type="tel"
                      placeholder="e.g., +91 98424 00000"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      error={errors.phone}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="e.g., yourname@gmail.com"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      error={errors.email}
                    />
                  </div>

                  <Textarea
                    label="Your Requirements / Event Details"
                    placeholder="Mention your event type (Wedding, Housewarming, Betrothal, Upanayanam), expected date, quantity of cards, and any printing preferences..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    error={errors.message}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full shadow-md"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#F4EFEB] text-xs text-[#78716C]">
              <span>🔒 We respect your privacy. Your contact details are strictly used for your card proofs and quotations.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Showroom Map & Location Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-xs border border-[#E7D7C1] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B4F]">
                SHOWROOM LOCATION
              </span>
              <h3 className="font-serif text-xl text-[#1C1917]">
                2, Aravind Plaza, Near GRT Jewellers, Fort Station Road, Trichy
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Subham+Cards+Aravind+Plaza+Fort+Station+Road+Trichy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#4A1521] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Location Map Frame */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-xs overflow-hidden border border-[#E7D7C1] bg-[#FAF8F5] shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.799767141325!2d78.6891507091333!3d10.826629989280635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5afed338e93%3A0x40b56973ecd755a5!2sSubham%20Cards!5e0!3m2!1sen!2sin!4v1788225955355!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Subham Cards Showroom Location - Fort Station Road, Trichy"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
