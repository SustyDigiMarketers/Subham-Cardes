import { ServiceItem, TestimonialItem, ProcessStep } from '../types';

export const siteContent = {
  business: {
    name: 'Subham Cards',
    tradeName: 'Subham Cards & Senthil Prints',
    tagline: 'Leading Wedding & Invitation Card Dealer in Trichy',
    shortDescription:
      'Over 2000+ varieties of ready-made, exclusive, and customized invitation cards for weddings, betrothals, housewarmings, and all auspicious ceremonies.',
    fullDescription:
      'Subham Cards in Trichy is a premier card dealer, wholesaler, and custom printing specialist. With over 2000 varieties of invitation cards and complete in-house designing and printing by sister concern Senthil Prints, we deliver exceptional craftsmanship, affordable pricing, and punctual service across Tamil Nadu.',
    address: {
      line1: '2, Aravind Plaza, Near GRT Jewellers',
      line2: 'Fort Station Road',
      city: 'Tiruchirappalli (Trichy)',
      state: 'Tamil Nadu',
      pincode: '620002',
      country: 'India',
      landmark: 'Near GRT Jewellers, Fort Station Road',
    },
    phones: {
      landline: '0431 4021000',
      mobile1: '+91 89733 25000',
      mobile2: '+91 98428 71481',
      mobile3: '+91 98424 33880',
      primaryDisplay: '+91 89733 25000',
      primaryClean: '918973325000',
      whatsapp: '+91 89733 25000',
      whatsappClean: '918973325000',
    },
    email: 'subhamcardstry@gmail.com',
    businessHours: [
      { days: 'Monday – Saturday', hours: '9:30 AM – 9:00 PM' },
      { days: 'Sunday', hours: '10:00 AM – 2:00 PM' },
    ],
    sisterConcern: {
      name: 'Senthil Prints',
      description:
        'Our dedicated in-house printing wing handling offset, screen printing, hot foil stamping, UV spot printing, multi-color visiting cards, bill books, posters, and stickers with eco-friendly paper.',
    },
    stats: [
      { label: 'Card Varieties Available', value: '2,000+' },
      { label: 'Families & Couples Served', value: '15,000+' },
      { label: 'Years of Printing Excellence', value: '20+ Years' },
      { label: 'On-Time Delivery Rate', value: '100%' },
    ],
  },

  trustHighlights: [
    {
      title: '2,000+ Card Varieties',
      description: 'The largest collection of ready-made, exclusive, and customized invitation designs in Trichy.',
      badge: 'Unmatched Selection',
    },
    {
      title: 'In-House Printing & Designing',
      description: 'Powered by Senthil Prints for sharp offset, foil stamping, screen printing, and UV spot finishes.',
      badge: 'Senthil Prints Unit',
    },
    {
      title: 'Direct Wholesale Pricing',
      description: 'Budget-friendly to royal luxury cards at transparent manufacturer-direct prices.',
      badge: 'Best Value Pledge',
    },
    {
      title: 'Guaranteed On-Time Delivery',
      description: 'Punctual printing and zero-delay handover before your auspicious ceremony dates.',
      badge: 'Punctual Service',
    },
  ],

  heroCards: [
    {
      id: 'subham-hero-1',
      name: 'The Royal Wedding Folio',
      category: 'Exclusive Multi-Fold Gold Foil & Embossed Card',
      description:
        'A magnificent multi-fold wedding invitation featuring rich traditional motifs, auspicious Shloka engravings, deep gold foil stamping, and matching envelope with deity insignia.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
      finishHighlight: 'Multi-Level Gold Foil & Embossed Board',
    },
    {
      id: 'subham-hero-2',
      name: 'Grahapravesam Heritage Suite',
      category: 'Auspicious Housewarming Ceremony Card',
      description:
        'Traditional Housewarming invitation designed with sacred Kalasam artwork, floral doorway toran graphics, and customized Tamil/English family invite verses.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
      finishHighlight: 'Textured Board & Auspicious Gold Inks',
    },
    {
      id: 'subham-hero-3',
      name: 'Grand Betrothal & Engagement Card',
      category: 'Nichayathartham & Ring Ceremony Suite',
      description:
        'Elegant pastel and pearlized card featuring precision laser filigree, couple monogram detailing, and customized event inserts for the ring exchange ceremony.',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
      finishHighlight: 'Laser Filigree & Pearlized Board',
    },
    {
      id: 'subham-hero-4',
      name: 'Sashtiapthapoorthi Heirloom Card',
      category: '60th & 80th Milestone Celebration Suite',
      description:
        'Revered ceremonial card crafted for Shashti Poorthi, Bheemaratha Shanthi, and Sadhabishekam with Vedic blessing verses and divine deity artwork.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      finishHighlight: 'Sacred Shloka & Brass Die Debossing',
    },
    {
      id: 'subham-hero-5',
      name: 'Arangetram Debut Invitation',
      category: 'Classical Bharatanatyam & Music Debut',
      description:
        'Artistic invitation honoring classical Indian dance and music with Nataraja silhouettes, Salangai motifs, guru tributes, and customized venue itineraries.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop',
      finishHighlight: 'Artistic Nataraja Foil & Silk Tassel',
    },
  ],

  services: [
    {
      id: 'subham-cards-wholesaler',
      title: 'Subham Cards',
      tagline: 'Cards Wholesaler • 2000+ Invitation Varieties',
      description:
        'We are a leading card wholesaler in Trichy. We offer a wide variety of invitation cards for family functions, business functions and ceremonies, including weddings, betrothal, Grahapravesam, birthdays, Upanayanam, puberty ceremonies, jubilees, Sashtiapthapoorthi, Sadhabishekam, inaugurations, Arangetram, brochures and corporate printing.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop',
      features: [
        '2000+ Varieties of Cards',
        'All Types of Invitation Cards',
        'New Designs',
      ],
      turnaroundTime: '2–5 business days',
      minOrder: 'Wholesale & Retail Quantities',
      priceStartingFrom: 'Direct Wholesale Pricing',
      popularFinishes: ['Gold Foil Stamping', 'Blind Embossing', 'Velvet Board'],
    },
    {
      id: 'senthil-prints-printing',
      title: 'Senthil Prints',
      tagline: 'Printing & Designing • Established Since 2000',
      description:
        'Senthil Prints is the sister concern of Subham Cards. We undertake all kinds of printing works and professional designing services. Since 2000, we have been providing a wide range of printing services including invitation card printing, visiting cards, books, bill books, notices, posters, stickers, notebooks and more.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      features: [
        'Highly Qualified Paper',
        'Eco-Friendly Papers',
        'Innovative, Traditional & Attractive Designs',
      ],
      turnaroundTime: '1–4 business days',
      minOrder: 'Based on print item',
      priceStartingFrom: 'In-House Press Direct Rates',
      popularFinishes: ['Precision Offset', 'Screen Printing', 'UV Spot & Foiling'],
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      title: '2000+ Exclusive Card Varieties',
      description:
        'Explore one of Tamil Nadu’s largest collections of ready-made, exclusive, and customized cards for all religious and cultural traditions.',
      icon: 'Sparkles',
    },
    {
      title: 'In-House Printing by Senthil Prints',
      description:
        'Complete end-to-end printing under one roof. No middlemen, ensuring strict quality control, faster processing, and direct accountability.',
      icon: 'Printer',
    },
    {
      title: 'Affordable Wholesale & Retail Rates',
      description:
        'We offer transparent, highly competitive pricing that caters to every family budget—from economical designs to grand royal suites.',
      icon: 'Palette',
    },
    {
      title: 'Polite, Soft-Spoken & Experienced Staff',
      description:
        'Our partners and courteous team (Mr. Senthil, Mr. Madhavan, Mr. Krishnamoorthy, Selvi & Sathya) assist you with patience and cultural etiquette.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Rigorous Quality Control & Punctual Handover',
      description:
        'Every card is thoroughly inspected for crisp typography, accurate deity alignment, and flawless finishing, delivered well before your Muhurtham.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Customized Designing & Multilingual Support',
      description:
        'Professional designers craft beautiful Tamil, English, and multilingual invitation wording with customized family details and shlokas.',
      icon: 'Layers',
    },
  ],

  processSteps: [
    {
      number: '01',
      title: 'Choose from 2,000+ Designs',
      subtitle: 'Visit our Trichy showroom or explore on WhatsApp',
      description:
        'Browse our vast catalog at Aravind Plaza, Fort Station Road, or connect on WhatsApp. Select your preferred style, paper texture, and budget.',
      deliverable: 'Card Selection & Initial Quotation',
    },
    {
      number: '02',
      title: 'Typesetting & Custom Wording',
      subtitle: 'Tamil, English & Multilingual Content Alignment',
      description:
        'Provide your bride & groom names, family details, Muhurtham time, and venue. Our professional DTP designers compose the auspicious wording.',
      deliverable: 'Digital Draft Proof for Review',
    },
    {
      number: '03',
      title: 'Proof Verification & Approval',
      subtitle: 'Double-check all names, dates & spellings',
      description:
        'Review the layout draft on WhatsApp or visit the showroom. We refine the proofs with you until every name and shloka is 100% verified.',
      deliverable: 'Final Approval for Printing',
    },
    {
      number: '04',
      title: 'Senthil Prints Press & Delivery',
      subtitle: 'Offset, Foil Stamping & Quality Packaging',
      description:
        'Senthil Prints operates the presses for crisp text, gold stamping, and precision cutting. Carefully packed and handed over on time.',
      deliverable: 'Punctual Handover of Your Finished Cards',
    },
  ] as ProcessStep[],

  testimonials: [
    {
      id: 'rev-1',
      coupleName: 'S. Ramanathan & Family',
      eventType: 'Sashtiapthapoorthi & Wedding Invitations',
      eventDate: 'Ceremony in Trichy',
      rating: 5,
      review:
        'Subham Cards has an incredible collection of over 2000 varieties. Mr. Senthil and his team guided us patiently through both the Sashtiapthapoorthi and wedding card selections. The printing quality from Senthil Prints was exceptionally sharp and delivered well before the Muhurtham date.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      cardChosen: 'Royal Traditional Wedding Folio with Shloka Inscription',
      city: 'Tiruchirappalli (Trichy)',
    },
    {
      id: 'rev-2',
      coupleName: 'K. Vignesh & Meenakshi',
      eventType: 'Traditional Hindu Wedding Suite',
      eventDate: 'Wedding in Thanjavur',
      rating: 5,
      review:
        'We visited their showroom at Aravind Plaza near GRT. The staff—Selvi and Sathya—were very courteous, helpful, and soft-spoken. They gave us plenty of time to choose. The gold foil work and Tamil font typesetting were completely error-free. Highly recommended across Tamil Nadu!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      cardChosen: 'Exclusive Multi-Fold Gold Foil Wedding Card',
      city: 'Thanjavur & Trichy',
    },
    {
      id: 'rev-3',
      coupleName: 'Dr. Anitha & S. Rajesh',
      eventType: 'Grahapravesam & Reception Cards',
      eventDate: 'Housewarming in Madurai',
      rating: 5,
      review:
        'Subham Cards provided the best wholesale price and delivered 500 housewarming cards in just 3 days! The Kalasam design and color combinations were praised by all our relatives. Truly one of the most reliable invitation card providers.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      cardChosen: 'Grahapravesam Traditional Kalasam Suite',
      city: 'Madurai & Trichy',
    },
    {
      id: 'rev-4',
      coupleName: 'P. Senthil Kumar (Guru & Parent)',
      eventType: 'Bharatanatyam Arangetram Debut',
      eventDate: 'Ceremony in Trichy',
      rating: 5,
      review:
        'We wanted a dedicated Nataraja theme with a multi-page booklet for our daughter’s dance debut. Senthil Prints designed the biography, guru tribute, and program sequence flawlessly. Outstanding design support from Mr. Madhavan.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      cardChosen: 'Arangetram Classical Debut Invitation Booklet',
      city: 'Tiruchirappalli',
    },
    {
      id: 'rev-5',
      coupleName: 'M. Balaji & Divya',
      eventType: 'Grand Betrothal & Wedding',
      eventDate: 'Ceremony in Karur',
      rating: 5,
      review:
        'Subham Cards was recommended by ThreeBestRated as one of the top card shops in Trichy, and they truly lived up to that reputation. High quality paper, reasonable rates, and wonderful customer service.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      cardChosen: 'Grand Betrothal & Pastel Laser-Cut Suite',
      city: 'Karur & Trichy',
    },
  ] as TestimonialItem[],

  faqs: [
    {
      q: 'Where is Subham Cards located in Trichy?',
      a: 'Our showroom is centrally located at 2, Aravind Plaza, Near GRT Jewellers, Fort Station Road, Trichy - 620002, Tamil Nadu. We welcome you to visit and explore over 2000+ card models in person.',
    },
    {
      q: 'How many varieties of invitation cards do you offer?',
      a: 'We offer over 2,000 varieties of invitation cards for all auspicious occasions including Wedding, Reception, Betrothal / Engagement, Grahapravesam, Sashtiapthapoorthi, Sadhabishekam, Upanayanam, Puberty Ceremony, Arangetram, Birthdays, and Business Inaugurations.',
    },
    {
      q: 'Do you offer custom designing and printing through Senthil Prints?',
      a: 'Yes! Our sister concern Senthil Prints handles all printing and custom design requirements in-house—including Tamil and English typesetting, offset printing, hot foil stamping, screen printing, embossing, and UV spot printing.',
    },
    {
      q: 'Can we order if we are located outside Trichy or in other districts?',
      a: 'Absolutely. We regularly serve customers from Thanjavur, Madurai, Karur, Dindigul, Pudukkottai, Chennai, and across India. We share designs and draft proofs over WhatsApp (+91 89733 25000) and dispatch parcels safely via courier.',
    },
    {
      q: 'How long does printing take after proof approval?',
      a: 'Standard orders are printed and completed within 3 to 6 business days after your final proof sign-off. Express fast-track printing is also available for urgent ceremony dates.',
    },
    {
      q: 'Do you also print visiting cards, bill books, and corporate materials?',
      a: 'Yes, through Senthil Prints, we provide complete printing solutions including multi-color visiting cards, bill books, letterheads, brochures, flyers, posters, stickers, and tags.',
    },
  ],
};
