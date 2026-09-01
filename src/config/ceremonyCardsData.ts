import { CeremonyCategoryItem, CeremonyCardBook } from '../types';

export const ceremonyCategories: CeremonyCategoryItem[] = [
  {
    id: 'ceremony-wedding',
    slug: 'wedding-cards',
    name: 'Wedding Cards',
    description:
      'Make your special day memorable with beautifully designed wedding invitations crafted in traditional, contemporary and premium styles.',
    coverImage:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    tagline: 'The Royal Wedding Folio',
  },
  {
    id: 'ceremony-reception',
    slug: 'reception-cards',
    name: 'Reception Cards',
    description:
      'Elegant reception invitations designed to welcome your guests with a refined presentation that complements your celebration.',
    coverImage:
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
    tagline: 'Grand Twilight Suite',
  },
  {
    id: 'ceremony-birthday',
    slug: 'birthday-cards',
    name: 'Birthday Cards',
    description:
      'Express your wishes with vibrant and thoughtfully designed invitations for birthdays and milestone celebrations.',
    coverImage:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop',
    tagline: 'Joyous Milestone Suite',
  },
  {
    id: 'ceremony-housewarming',
    slug: 'housewarming-cards',
    name: 'Housewarming Cards',
    description:
      'Invite family and friends to your new beginning with graceful housewarming invitations inspired by tradition and modern design.',
    coverImage:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
    tagline: 'Grahapravesam Heritage Suite',
  },
  {
    id: 'ceremony-greeting',
    slug: 'greeting-cards',
    name: 'Greeting Cards',
    description:
      'Share warm wishes and heartfelt messages through beautifully crafted greeting cards for meaningful occasions.',
    coverImage:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    tagline: 'Artisan Handcrafted Suite',
  },
  {
    id: 'ceremony-party',
    slug: 'party-cards',
    name: 'Party Cards',
    description:
      'Set the tone for your celebration with stylish invitations designed for parties, gatherings and special events.',
    coverImage:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
    tagline: 'Celebration Banquet Suite',
  },
  {
    id: 'ceremony-announcement',
    slug: 'announcement-cards',
    name: 'Announcement Cards',
    description:
      'Share important moments and joyful news with thoughtfully designed announcement cards made to leave a lasting impression.',
    coverImage:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
    tagline: 'Prestige Inauguration Folio',
  },
  {
    id: 'ceremony-festival',
    slug: 'festival-cards',
    name: 'Festival Cards',
    description:
      'Celebrate the spirit of every festival with vibrant invitation and greeting designs created for festive occasions.',
    coverImage:
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1000&auto=format&fit=crop',
    tagline: 'Festive Heritage Suite',
  },
];

export const ceremonyCardsBooksData: Record<string, CeremonyCardBook> = {
  'wedding-cards': {
    id: 'book-wedding',
    categorySlug: 'wedding-cards',
    categoryName: 'Wedding Cards',
    title: 'The Royal Wedding Folio',
    description:
      'Multi-fold regal gold foil wedding invitation crafted with Lord Ganesha motifs, auspicious Sanskrit Shlokas, and hand-embossed borders.',
    finishType: 'Hot Gold Foil Stamping & Textured Velvet',
    dimensions: '6.5" x 9.5" Multi-Fold Suite',
    paperStock: '380 GSM Pearlized Metallic Board',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
        heading: 'Subham Cards Royal Wedding Suite',
        caption: 'Embossed Deity Motif with Gold Leaf Accents',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Invocation)',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
        heading: 'Auspicious Muhurtham Shlokam',
        caption: 'Sacred Invocations & Family Blessings in Tamil and English',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Event Details)',
        image:
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
        heading: 'Ceremony Schedule & Mandapam Venue',
        caption: 'Typeset with Muhurtham Timings, Reception & Directions',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop',
        heading: 'With Best Compliments',
        caption: 'Heritage Border with Subham Cards Quality Seal',
      },
    ],
  },
  'reception-cards': {
    id: 'book-reception',
    categorySlug: 'reception-cards',
    categoryName: 'Reception Cards',
    title: 'Grand Twilight Reception Suite',
    description:
      'Modern twilight navy card with rose gold filigree borders, romantic couple emblem, and coordinated dinner banquet inserts.',
    finishType: 'Rose Gold Foil & Matte Velvet Touch',
    dimensions: '5.5" x 8.5" Bi-Fold Folio',
    paperStock: '350 GSM Matte Velvet Touch Board',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
        heading: 'Twilight Reception Invitation',
        caption: 'Laser-Cut Filigree & Rose Gold Lettering',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Celebration Verse)',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
        heading: 'Warm Welcome & Couple Dedication',
        caption: 'Poetic Celebration Verse & Family Greetings',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Banquet Details)',
        image:
          'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop',
        heading: 'Evening Reception & Dinner Banquet',
        caption: 'Banquet Timings, Venue Coordinates & RSVP Contact',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
        heading: 'Subham Cards Signature Atelier',
        caption: 'Minimal Gold Crest Insignia',
      },
    ],
  },
  'birthday-cards': {
    id: 'book-birthday',
    categorySlug: 'birthday-cards',
    categoryName: 'Birthday Cards',
    title: 'Joyous Milestone & Birthday Suite',
    description:
      'Vibrant celebration invitations with custom photo windows, embossed gold lettering, and playful festive accents for milestone birthdays.',
    finishType: 'High Gloss UV Spot & Gold Embossing',
    dimensions: '5" x 7" Folded Card',
    paperStock: '300 GSM Premium Cardstock',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop',
        heading: 'Joyful Birthday Celebration',
        caption: 'Embossed Balloons & Golden Confetti Accents',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Celebrant Tribute)',
        image:
          'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop',
        heading: 'Milestone Memories & Warm Wishes',
        caption: 'Photo Space & Celebration Wishes',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Party Schedule)',
        image:
          'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop',
        heading: 'Cake Cutting & Fun Festivities',
        caption: 'Party Schedule, Games, Venue & Family RSVP',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop',
        heading: 'Festive Greeting Signature',
        caption: 'Subham Cards Celebration Collection',
      },
    ],
  },
  'housewarming-cards': {
    id: 'book-housewarming',
    categorySlug: 'housewarming-cards',
    categoryName: 'Housewarming Cards',
    title: 'Grahapravesam Heritage Kalasam Suite',
    description:
      'Sacred Grahapravesam card featuring holy Kalasam, mango leaf toran, Kamadhenu blessing motifs, and custom Tamil & English typography.',
    finishType: 'Gold Foil Stamping & Textured Handmade Finish',
    dimensions: '5" x 7" Traditional Bi-Fold',
    paperStock: '320 GSM Eco-Textured Paperboard',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
        heading: 'Grahapravesam Auspicious Invitation',
        caption: 'Sacred Kalasam & Temple Arch Gold Motifs',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Vastu Invocations)',
        image:
          'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop',
        heading: 'Ganapathi Homam & Paal Kaichuthal',
        caption: 'Traditional Tamil Shlokas & Auspicious Morning Hours',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Residence Venue)',
        image:
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
        heading: 'New Abode Address & Route Guide',
        caption: 'Host Family Details, Landmark Directions & Feast Time',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
        heading: 'Subham Cards Auspicious Series',
        caption: 'Traditional Temple Toran Watermark',
      },
    ],
  },
  'greeting-cards': {
    id: 'book-greeting',
    categorySlug: 'greeting-cards',
    categoryName: 'Greeting Cards',
    title: 'Artisan Handcrafted Greeting Suite',
    description:
      'Refined greeting cards crafted on pearlized cardstock with intricate filigree embossing for festivals, jubilees, and personal tokens of goodwill.',
    finishType: 'Blind Embossing & Pearlized Foil Trim',
    dimensions: '4.5" x 6.5" Folded Card',
    paperStock: '300 GSM Pearlized Cardboard',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
        heading: 'With Heartfelt Best Wishes',
        caption: 'Handcrafted Calligraphy & Pearlized Foil Border',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Blessings Poem)',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
        heading: 'Warmest Greetings & Prosperity',
        caption: 'Timeless Verse of Peace and Happiness',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Personalized Note)',
        image:
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
        heading: 'Custom Inscribed Message',
        caption: 'Gold Foiled Corners for Inscribed Messages',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
        heading: 'Handcrafted by Subham Cards',
        caption: 'Trichy Artisan Stationery Hallmark',
      },
    ],
  },
  'party-cards': {
    id: 'book-party',
    categorySlug: 'party-cards',
    categoryName: 'Party Cards',
    title: 'Celebration Banquet & Party Suite',
    description:
      'Stylish party invitations featuring metallic foil lettering, geometric and floral accents, and tailored event itineraries for galas and banquets.',
    finishType: 'Dual Metallic Foil & Matte Laminate',
    dimensions: '5" x 7" Single/Bi-Fold Card',
    paperStock: '350 GSM Silk Velvet Board',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
        heading: 'You Are Invited To Celebrate',
        caption: 'Sleek Metallic Finish & Modern Typography',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Event Styling)',
        image:
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
        heading: 'Theme, Music & Dress Code',
        caption: 'Gala Evening Itinerary & Special Attractions',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Banquet Details)',
        image:
          'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
        heading: 'Dinner Banquet & Venue Location',
        caption: 'Reception Hours, Dinner Buffet & RSVP Coordinates',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
        heading: 'Subham Cards Party Collection',
        caption: 'Celebration Series Seal',
      },
    ],
  },
  'announcement-cards': {
    id: 'book-announcement',
    categorySlug: 'announcement-cards',
    categoryName: 'Announcement Cards',
    title: 'Prestige Inauguration & Announcement Folio',
    description:
      'Distinguished formal cards for shop openings, company launches, public honors, and significant family announcements with official crest foil.',
    finishType: 'Deep Burgundy Velvet & Hot Gold Stamp',
    dimensions: '6" x 8.5" Folio with Pocket',
    paperStock: '400 GSM Padded Hardbound Board',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
        heading: 'Grand Inauguration Announcement',
        caption: 'Deep Burgundy Board with Gold Leaf Foil Crest',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Honorary Patrons)',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
        heading: 'Chief Guests & Dignitaries',
        caption: 'Formal Address, Patron Invocations & Lamp Lighting',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Event Schedule)',
        image:
          'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
        heading: 'Inaugural Ceremony & High Tea',
        caption: 'Facility Address, Program Timeline & Parking Guidance',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
        heading: 'Corporate & Institution Series',
        caption: 'Printed by Senthil Prints • Subham Cards Trichy',
      },
    ],
  },
  'festival-cards': {
    id: 'book-festival',
    categorySlug: 'festival-cards',
    categoryName: 'Festival Cards',
    title: 'Festive Heritage & Deepavali Greeting Suite',
    description:
      'Bright traditional cards celebrating Deepavali, Pongal, New Year, and religious festivals with auspicious Diya lamps and peacock motifs.',
    finishType: 'Gold Foil Diya Lamp & Multi-Color Foil',
    dimensions: '5" x 7" Festive Bi-Fold',
    paperStock: '300 GSM Eco-Friendly Gold Cardstock',
    pages: [
      {
        pageNumber: 1,
        pageType: 'cover',
        pageLabel: 'Front Cover',
        image:
          'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1000&auto=format&fit=crop',
        heading: 'Auspicious Festival Greetings',
        caption: 'Gold Foil Diya Lamp & Traditional Kolam Motifs',
      },
      {
        pageNumber: 2,
        pageType: 'spread-left',
        pageLabel: 'Inside Left (Festive Shloka)',
        image:
          'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop',
        heading: 'Lakshmi & Vinayagar Blessings',
        caption: 'Devotional Shlokas for Wealth, Health & Joy',
      },
      {
        pageNumber: 3,
        pageType: 'spread-right',
        pageLabel: 'Inside Right (Celebration Message)',
        image:
          'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1000&auto=format&fit=crop',
        heading: 'Warmest Festive Wishes from Family',
        caption: 'Custom Tamil & English Holiday Greetings',
      },
      {
        pageNumber: 4,
        pageType: 'back',
        pageLabel: 'Back Cover',
        image:
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
        heading: 'Subham Cards Festive Collection',
        caption: 'Traditional Heritage Motif Stamp',
      },
    ],
  },
};
