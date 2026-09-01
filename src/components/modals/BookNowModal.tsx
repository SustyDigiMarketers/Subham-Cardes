import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Upload,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  DollarSign,
  AlertCircle,
  FileCheck,
  Trash2,
} from 'lucide-react';
import { BookingEnquiry } from '../../types';
import { submitEnquiry, generateQuickWhatsAppLink } from '../../services/enquiryService';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { Input, Select, Textarea } from '../ui/FormControls';
import { FiligreeDivider } from '../ui/SectionHeading';

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCardStyle?: string;
}

const EVENT_TYPES = [
  { value: 'Wedding Ceremony & Reception', label: 'Wedding Ceremony & Reception' },
  { value: 'Betrothal / Engagement (Nichayathartham)', label: 'Betrothal / Engagement (Nichayathartham)' },
  { value: 'Grahapravesam (Housewarming)', label: 'Grahapravesam (Housewarming)' },
  { value: 'Sashtiapthapoorthi / Sadhabishekam (60th/80th)', label: 'Sashtiapthapoorthi / Sadhabishekam (60th/80th)' },
  { value: 'Upanayanam / Sacred Thread Ceremony', label: 'Upanayanam / Sacred Thread Ceremony' },
  { value: 'Puberty Ceremony (Manjal Neerattu Vizha)', label: 'Puberty Ceremony (Manjal Neerattu Vizha)' },
  { value: 'Arangetram (Dance / Music Debut)', label: 'Arangetram (Dance / Music Debut)' },
  { value: 'Birthday / Silver & Golden Jubilee', label: 'Birthday / Silver & Golden Jubilee' },
  { value: 'Shop Inauguration / Business Function', label: 'Shop Inauguration / Business Function' },
  { value: 'Senthil Prints: Commercial / General Printing', label: 'Senthil Prints: Commercial / General Printing' },
];

const CARD_STYLES = [
  { value: 'Royal Multi-Fold Gold Foil & Embossed Card', label: 'Royal Multi-Fold Gold Foil & Embossed Card' },
  { value: 'Traditional Hindu / Vedic Wedding Card', label: 'Traditional Hindu / Vedic Wedding Card' },
  { value: 'Christian / Church Wedding Card Suite', label: 'Christian / Church Wedding Card Suite' },
  { value: 'Muslim / Nikah Wedding Card Suite', label: 'Muslim / Nikah Wedding Card Suite' },
  { value: 'Modern Pastel & Laser-Cut Filigree Card', label: 'Modern Pastel & Laser-Cut Filigree Card' },
  { value: 'Padded Hardbound Luxury Boxed Card', label: 'Padded Hardbound Luxury Boxed Card' },
  { value: 'Crystalline Acrylic / Translucent Card', label: 'Crystalline Acrylic / Translucent Card' },
  { value: 'Economic / Budget-Friendly Ready-Made Card', label: 'Economic / Budget-Friendly Ready-Made Card' },
  { value: 'Commercial Printing (Visiting Cards / Bill Books)', label: 'Commercial Printing (Visiting Cards / Bill Books)' },
  { value: 'Need Showroom Recommendation (2000+ Choices)', label: 'Not Sure — Need Showroom Recommendation (2000+ Choices)' },
];

const QUANTITY_OPTIONS = [
  { value: '50 - 100 Cards', label: '50 – 100 Cards' },
  { value: '100 - 250 Cards', label: '100 – 250 Cards' },
  { value: '250 - 500 Cards', label: '250 – 500 Cards' },
  { value: '500 - 1000 Cards', label: '500 – 1,000 Cards' },
  { value: '1000+ Cards (Wholesale / Bulk)', label: '1,000+ Cards (Wholesale / Bulk)' },
  { value: 'Below 50 Cards (Small Function)', label: 'Below 50 Cards (Small Function)' },
];

const BUDGET_OPTIONS = [
  { value: 'Budget / Economical (₹15 – ₹35 per card)', label: 'Budget / Economical (₹15 – ₹35 per card)' },
  { value: 'Standard Premium (₹35 – ₹75 per card)', label: 'Standard Premium (₹35 – ₹75 per card)' },
  { value: 'Luxury Designer (₹75 – ₹150 per card)', label: 'Luxury Designer (₹75 – ₹150 per card)' },
  { value: 'Royal Boxed / Padded (₹150+ per card)', label: 'Royal Boxed / Padded (₹150+ per card)' },
  { value: 'Wholesale / Commercial Printing Rates', label: 'Wholesale / Commercial Printing Rates' },
];

export const BookNowModal: React.FC<BookNowModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialCardStyle = '',
}) => {
  const [formData, setFormData] = useState<BookingEnquiry>({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    eventType: 'Wedding Ceremony & Reception',
    eventDate: '',
    cardQuantity: '100 - 200 Suites',
    preferredStyle: initialCardStyle || 'Luxury Velvet & Hot Gold Foil',
    budgetRange: '$1,000 - $2,500',
    serviceInterest: initialService,
    additionalRequirements: '',
    referenceFileName: '',
  });

  const [referenceFile, setReferenceFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    enquiryId?: string;
    whatsappUrl?: string;
    message?: string;
  } | null>(null);

  // Sync initial prefill values when opened with specific selection
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialService }));
    }
    if (initialCardStyle) {
      setFormData((prev) => ({ ...prev, preferredStyle: initialCardStyle }));
    }
  }, [initialService, initialCardStyle]);

  // Handle ESC key and scroll lock
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const handleChange = (
    field: keyof BookingEnquiry,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setReferenceFile(file);
      setFormData((prev) => ({ ...prev, referenceFileName: file.name }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setReferenceFile(file);
      setFormData((prev) => ({ ...prev, referenceFileName: file.name }));
    }
  };

  const removeFile = () => {
    setReferenceFile(null);
    setFormData((prev) => ({ ...prev, referenceFileName: '' }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.eventDate.trim()) {
      errs.eventDate = 'Please select or approximate your event date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await submitEnquiry(formData);
      if (result.success) {
        setIsSuccess(true);
        setSubmissionResult(result);
      } else {
        setErrors({ general: result.message });
      }
    } catch {
      setErrors({ general: 'Something went wrong. Please try again or message us on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFormAndClose = () => {
    setIsSuccess(false);
    setSubmissionResult(null);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetFormAndClose}
          className="fixed inset-0 bg-[#1C1917]/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-50 w-full max-w-2xl bg-[#FAF8F5] rounded-sm shadow-2xl overflow-hidden border border-[#E7D7C1] my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="bg-[#4A1521] text-[#FAF8F5] px-6 py-5 relative flex items-center justify-between border-b border-[#C5A880]/30">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] block">
                Subham Cards & Senthil Prints • Trichy
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mt-0.5">
                {isSuccess ? 'Inquiry Submitted' : 'Book Cards / Request Quote'}
              </h3>
            </div>
            <button
              onClick={resetFormAndClose}
              aria-label="Close dialog"
              className="p-2 text-[#E7D7C1] hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1 bg-[#FAF8F5]">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6 sm:py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-[#4A1521]/10 text-[#4A1521] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#FAF8F5]">
                  <CheckCircle2 className="w-10 h-10 text-[#4A1521]" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest text-[#9E7B4F] uppercase">
                    Reference ID: {submissionResult?.enquiryId}
                  </span>
                  <h4 className="font-serif text-3xl text-[#1C1917]">
                    Thank You For Inquiring!
                  </h4>
                  <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1C1917]">{formData.name}</strong>! Your inquiry has been received. Our Subham Cards team will review your requirements and reach out with catalog options, proofs, and wholesale pricing.
                  </p>
                </div>

                <FiligreeDivider />

                <div className="bg-[#FFFFFF] p-5 rounded-xs border border-[#E7D7C1] max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#78716C]">Event Type:</span>
                    <span className="font-semibold text-[#1C1917]">{formData.eventType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78716C]">Date:</span>
                    <span className="font-semibold text-[#1C1917]">{formData.eventDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78716C]">Quantity:</span>
                    <span className="font-semibold text-[#1C1917]">{formData.cardQuantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#78716C]">Preferred Style:</span>
                    <span className="font-semibold text-[#1C1917]">{formData.preferredStyle}</span>
                  </div>
                </div>

                {/* Direct WhatsApp Action */}
                <div className="space-y-3 max-w-md mx-auto pt-2">
                  {submissionResult?.whatsappUrl && (
                    <a
                      href={submissionResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="whatsapp"
                        size="lg"
                        className="w-full"
                        leftIcon={<WhatsAppIcon className="w-5 h-5" />}
                      >
                        Fast-Track On WhatsApp
                      </Button>
                    </a>
                  )}
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full"
                    onClick={resetFormAndClose}
                  >
                    Done & Close
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formData.serviceInterest && (
                  <div className="bg-[#F4EFEB] border border-[#C5A880] p-3 rounded-xs flex items-center justify-between text-xs">
                    <span className="text-[#4A1521] font-semibold">
                      Selected Service: {formData.serviceInterest}
                    </span>
                    <span className="text-[#9E7B4F] text-[11px] uppercase tracking-wider">
                      Auto-Attached
                    </span>
                  </div>
                )}

                {errors.general && (
                  <div className="p-3 bg-[#FDF2F2] border border-[#9E2A2B]/30 rounded-xs flex items-center gap-2 text-xs text-[#9E2A2B]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.general}</span>
                  </div>
                )}

                {/* Row 1: Personal Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Your Full Name"
                    placeholder="e.g., Alexandra Montgomery"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    error={errors.name}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="alexandra@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={errors.email}
                  />
                </div>

                {/* Row 2: Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    error={errors.phone}
                  />
                  <Input
                    label="WhatsApp Number (Optional)"
                    type="tel"
                    placeholder="Same as phone or international format"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    helperText="For instant design proofs & samples"
                  />
                </div>

                {/* Row 3: Event Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Event Type"
                    options={EVENT_TYPES}
                    value={formData.eventType}
                    onChange={(e) => handleChange('eventType', e.target.value)}
                  />
                  <Input
                    label="Expected Event Date"
                    type="date"
                    required
                    leftIcon={<Calendar className="w-4 h-4" />}
                    value={formData.eventDate}
                    onChange={(e) => handleChange('eventDate', e.target.value)}
                    error={errors.eventDate}
                  />
                </div>

                {/* Row 4: Card Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Estimated Quantity"
                    options={QUANTITY_OPTIONS}
                    value={formData.cardQuantity}
                    onChange={(e) => handleChange('cardQuantity', e.target.value)}
                  />
                  <Select
                    label="Preferred Card Style"
                    options={CARD_STYLES}
                    value={formData.preferredStyle}
                    onChange={(e) => handleChange('preferredStyle', e.target.value)}
                  />
                </div>

                {/* Row 5: Budget Range */}
                <Select
                  label="Estimated Budget Range"
                  options={BUDGET_OPTIONS}
                  value={formData.budgetRange}
                  onChange={(e) => handleChange('budgetRange', e.target.value)}
                  helperText="Helps us suggest suitable print techniques and paper weights"
                />

                {/* Row 6: Upload Reference Image */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A1521]">
                    Reference Design / Moodboard (Optional)
                  </label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleFileDrop}
                    className={`border-2 border-dashed rounded-sm p-4 text-center transition-colors cursor-pointer bg-[#FFFFFF] ${
                      dragOver
                        ? 'border-[#4A1521] bg-[#FAF8F5]'
                        : 'border-[#E7D7C1] hover:border-[#C5A880]'
                    }`}
                  >
                    {referenceFile ? (
                      <div className="flex items-center justify-between bg-[#F4EFEB] p-2.5 rounded-xs">
                        <div className="flex items-center gap-2 text-xs text-[#1C1917] truncate">
                          <FileCheck className="w-4 h-4 text-[#4A1521] shrink-0" />
                          <span className="truncate">{referenceFile.name}</span>
                          <span className="text-[11px] text-[#78716C]">
                            ({(referenceFile.size / 1024).toFixed(0)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-[#9E2A2B] hover:text-[#7D1D1E] p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer flex flex-col items-center gap-1.5 py-1">
                        <Upload className="w-6 h-6 text-[#9E7B4F]" />
                        <span className="text-xs font-medium text-[#1C1917]">
                          Drag & drop card photo or <span className="text-[#4A1521] underline">browse file</span>
                        </span>
                        <span className="text-[11px] text-[#78716C]">
                          PNG, JPG, PDF up to 10MB
                        </span>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* Row 7: Additional Requirements */}
                <Textarea
                  label="Specific Requirements / Special Notes"
                  placeholder="Tell us about your wedding theme, desired colors, custom wax stamp initials, or special multilingual text..."
                  rows={3}
                  value={formData.additionalRequirements}
                  onChange={(e) => handleChange('additionalRequirements', e.target.value)}
                />

                {/* Actions */}
                <div className="pt-3 space-y-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full shadow-md"
                    isLoading={isSubmitting}
                    rightIcon={<Sparkles className="w-4 h-4" />}
                  >
                    Submit Booking Enquiry
                  </Button>

                  <div className="text-center">
                    <span className="text-xs text-[#78716C]">
                      Prefer chatting immediately?{' '}
                      <a
                        href={generateQuickWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A1521] font-semibold underline hover:text-[#9E7B4F]"
                      >
                        Chat directly on WhatsApp →
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
