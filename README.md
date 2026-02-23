# Jeddah Palaces for Natural Stone - Frontend

Bilingual (Arabic/English) portfolio website built with Astro.js, showcasing interior and exterior design projects, natural stone products, and services.

## 🚀 Tech Stack

- **Framework**: Astro.js (static site generation)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript (strict mode)
- **CMS**: Sanity.io (Headless CMS)
- **UI Components**: React (for interactive islands)
- **Deployment**: Vercel

## 📋 Features

✅ **Bilingual Support** (Arabic RTL/English LTR) with localStorage persistence  
✅ **Dark Mode** with smooth transitions  
✅ **Before/After Image Sliders** for project showcases  
✅ **Auto-Rotating Product Galleries**  
✅ **Reverse Reference Queries** (products → projects)  
✅ **SEO Optimized** with meta tags, Open Graph, Schema.org markup  
✅ **Accessible** (WCAG 2.1 AA compliant)  
✅ **Performance Optimized** (lazy loading, image optimization)  
✅ **Contact Form** with validation and spam protection  

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Environment Variables

The `.env` file is already configured with Sanity credentials:

```env
PUBLIC_SANITY_PROJECT_ID=pch9lqf5
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-12-01
```

### 3. Configure Contact Form

The contact form uses Web3Forms. To complete setup:

1. Visit https://web3forms.com/ and create a free account
2. Create a new form and copy your access key
3. Open `src/components/ContactForm.tsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` (line 52) with your actual key

See `WEB3FORMS_SETUP.md` for more details.

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:4321

### 5. Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero section with featured projects |
| Products | `/products` | Grid of all products with galleries |
| Product Detail | `/products/[slug]` | Individual product with related projects |
| Portfolio | `/portfolio` | All projects with before/after sliders |
| Services | `/services` | Company services with descriptions |
| About | `/about` | Company/engineer bio and contact info |
| Contact | `/contact` | Contact form and information |

## 🌍 Internationalization

- Language toggle in header (top-right)
- Preference stored in localStorage as `jpns_language`
- All content fetched from Sanity with bilingual fields
- RTL layout for Arabic, LTR for English
- Uses Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`)

## 🎨 Color Palette

```css
Primary: #2E2D2B (Dark Charcoal)
Secondary: #C5B080 (Muted Gold)
Accent: #8B775C (Russet Brown)
Extra-1: #F8F5EE (Creamy Off-White)
Extra-2: #6A5D4D (Medium Gray-Brown)
```

## 📦 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/             # Layout templates
│   │   └── BaseLayout.astro
│   ├── pages/               # Route pages
│   │   ├── index.astro      # Homepage
│   │   ├── products.astro
│   │   ├── products/[slug].astro
│   │   ├── portfolio.astro
│   │   ├── services.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── lib/                 # Utilities
│   │   ├── sanity.ts        # Sanity client
│   │   ├── types.ts         # TypeScript types
│   │   └── i18n.ts          # Internationalization
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── package.json
```

## 🚀 Deployment to Vercel

### Method 1: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Method 2: Via GitHub

1. Push code to GitHub repository
2. Go to https://vercel.com
3. Import your repository
4. Configure:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Framework Preset**: Astro
5. Add environment variables
6. Deploy!

### Environment Variables (Vercel)

Add these in Vercel dashboard:

```
PUBLIC_SANITY_PROJECT_ID=pch9lqf5
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-12-01
```

## 🧪 Testing Checklist

- [ ] Language toggle works (Arabic ↔ English)
- [ ] Dark mode persists across pages
- [ ] Before/After sliders are responsive
- [ ] Product galleries auto-rotate and pause on hover
- [ ] Contact form validates and submits
- [ ] All navigation links work
- [ ] Mobile hamburger menu functions
- [ ] Images lazy load properly
- [ ] SEO meta tags present on all pages
- [ ] Reverse reference works (product → projects)

## 📊 Performance

Target metrics (Google PageSpeed Insights):
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 🔗 Related

- **Sanity Studio**: Run `npm run dev` in `../sanity` directory (http://localhost:3333)
- **Sanity Project ID**: pch9lqf5
- **Dataset**: production

## 📝 Notes

- Make sure Sanity Studio has content before previewing the website
- Update Web3Forms access key before deploying to production
- The website handles empty states gracefully if no content exists
- All images are optimized automatically by Sanity CDN

## 🤝 Support

For questions or issues, contact: mhamd200211@gmail.com

