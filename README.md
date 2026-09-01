# Velvet & Vow — Luxury Wedding Invitation & Card Printing Studio

A premium, modern, conversion-focused web application for an artisanal wedding invitation and card printing studio.

## 🚀 Tech Stack

- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for subtle, accessible micro-interactions
- **Lucide Icons**
- **Vite**

## ✨ Core Features

1. **Pages**:
   - **Home**: Editorial hero, Trust highlights, About story preview, 6 Service cards, Filterable card showcase (Traditional, Luxury, Modern, Minimal, Custom) with Lightbox modal, 4-step process timeline, Interactive Suite Configurator, Testimonials slider, and High-converting final CTA.
   - **About**: Atelier heritage, printmaking machinery details (Heidelberg letterpress, hot foil stamping, hand-deckled cotton), and quality pledge.
   - **Services**: Full 8-service deep dive with turnaround times, inclusions, price estimates, and direct "Book This Service" prefilled CTA triggers.
   - **Contact**: Full address, phone, WhatsApp direct link, email, business hours, simulated Google Maps embed, and interactive validated enquiry form.

2. **Centralized "Book Now" Modal**:
   - Accessible from every CTA across the site.
   - Auto-prefills chosen service or card style.
   - Supports quantity options, budget ranges, event dates, reference moodboard uploads, and instant WhatsApp handoff.

3. **SEO & Performance**:
   - Configurable site configuration in `/src/config/siteConfig.ts`.
   - Semantic HTML5, Schema.org `LocalBusiness` JSON-LD metadata.
   - `robots.txt` and `sitemap.xml`.
   - Responsive layouts optimized from mobile (375px) to ultra-wide desktop.

## 🌐 Custom Domain & GitHub Pages Deployment

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. For GitHub Pages with a custom domain, place your `CNAME` file in `/public/CNAME`:
   ```
   invitations.yourdomain.com
   ```
3. Point your DNS records:
   - For Apex domain: Point `A` records to GitHub Pages IP addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - For Subdomain: Add a `CNAME` record pointing to `<username>.github.io`.
