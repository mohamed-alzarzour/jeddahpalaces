<div align="center">

# 🏛️ Jeddah Palaces for Natural Stone

### Premium Interior & Exterior Design | تصميم داخلي وخارجي فاخر

**A fully bilingual (Arabic/English), performance-optimized web application for a natural stone and interior finishing company based in Jeddah, Saudi Arabia.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-jeddahpalaces.vercel.app-C5B080?style=for-the-badge)](https://jeddahpalaces.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-5.x-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Sanity](https://img.shields.io/badge/Sanity_CMS-Studio-f36458?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## ✨ Features

### 🎨 Design & UX

- **Bilingual Support** — Full Arabic (RTL) and English (LTR) with seamless language toggle
- **Dark/Light Mode** — Theme persistence with zero-flash loading
- **Responsive Design** — Mobile-first approach, optimized for all screen sizes
- **Smooth Animations** — Scroll-linked parallax, page transitions, and micro-interactions
- **Before/After Slider** — Interactive comparison slider for project showcases

### 📄 Pages

| Page                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| **Home**             | Hero section, featured projects with before/after sliders, services overview |
| **Products**         | Product catalog with image galleries and category filtering                  |
| **Portfolio**        | Completed project showcase with before/after transformations                 |
| **Current Projects** | Active construction projects with progress photo timelines                   |
| **Gallery**          | Filterable photo gallery with multi-category support and lightbox            |
| **Services**         | Service offerings managed via CMS                                            |
| **About**            | Company information and team details                                         |
| **Contact**          | Contact form (Web3Forms), social links, location info                        |
| **404**              | Custom error page                                                            |

### ⚙️ Technical

- **Headless CMS** — Sanity Studio with custom schemas, desk structure, and image pipeline
- **SSR** — Server-side rendering on Vercel Edge for SEO and performance
- **Image Optimization** — Automatic WebP/AVIF via Sanity CDN with `auto=format`
- **View Transitions** — Astro Client Router for SPA-like navigation
- **Security Headers** — CSP, X-Frame-Options, HSTS, Referrer-Policy via `vercel.json`
- **SEO Optimized** — Structured meta tags, Open Graph, canonical URLs, semantic HTML

---

## 🏗️ Architecture

```
jeddahpalaces/
├── frontend/                   # Astro application
│   ├── src/
│   │   ├── components/         # 13 reusable components (Astro + React)
│   │   │   ├── Header.astro        # Navigation with 8 links
│   │   │   ├── Footer.astro        # Footer with social links
│   │   │   ├── MobileMenu.tsx      # Animated mobile menu (React)
│   │   │   ├── ContactForm.tsx     # Form with validation (React)
│   │   │   ├── BeforeAfterSlider.tsx
│   │   │   ├── ProductImageSlider.tsx  # Product image carousel
│   │   │   ├── ScrollFloat.tsx     # Parallax scroll effect
│   │   │   ├── FloatingActionButton.tsx
│   │   │   ├── DarkModeToggle.tsx
│   │   │   ├── LanguageToggle.tsx
│   │   │   └── ...
│   │   ├── pages/              # 9 pages + dynamic routes
│   │   ├── layouts/            # BaseLayout with SEO
│   │   ├── lib/                # Utilities
│   │   │   ├── sanity.ts           # Sanity client + image builder
│   │   │   ├── i18n.ts            # Bilingual translations (AR/EN)
│   │   │   └── types.ts           # TypeScript interfaces
│   │   ├── styles/             # Global CSS + Tailwind config
│   │   └── middleware.ts       # Language detection
│   ├── vercel.json             # Security headers + cache config
│   └── .env.example            # Environment variables template
├── sanity/                     # Sanity Studio
│   ├── schemaTypes/            # 10 content schemas
│   │   ├── project.ts              # Projects (active/completed workflow)
│   │   ├── product.ts              # Product catalog
│   │   ├── homepageSettings.ts     # Homepage configuration
│   │   ├── photoGallery.ts         # Photo gallery with categories
│   │   ├── contactInfo.ts          # Contact information
│   │   ├── service.ts              # Services
│   │   ├── aboutPage.ts            # About page content
│   │   └── localeString/Text.ts    # i18n field types
│   └── desk/
│       └── structure.ts            # Custom desk with project status views
└── gtmetrix-report.pdf         # Performance test report
```

---

## 🛠️ Tech Stack

| Layer          | Technology                                                    |
| -------------- | ------------------------------------------------------------- |
| **Framework**  | [Astro 5](https://astro.build) — Static + SSR hybrid          |
| **UI Library** | [React 18](https://react.dev) — Interactive islands           |
| **Styling**    | [Tailwind CSS 3](https://tailwindcss.com) — Utility-first     |
| **CMS**        | [Sanity v3](https://sanity.io) — Headless content management  |
| **Deployment** | [Vercel](https://vercel.com) — Edge SSR + CDN                 |
| **Forms**      | [Web3Forms](https://web3forms.com) — Serverless contact form  |
| **Language**   | [TypeScript](https://typescriptlang.org) — Type-safe codebase |

---

## 🚀 Key Features

### 🌐 Full Bilingual Architecture

- Complete Arabic (RTL) and English (LTR) with seamless toggle
- Custom `localeString` / `localeText` Sanity field types for all content
- Language middleware auto-detects and persists user preference via `localStorage`
- 50+ translation keys covering every UI element

### 🌙 Dark / Light Mode

- Default dark theme with instant toggle — no flash of light mode
- Inline `<head>` script applies theme before first render
- Persistent preference across sessions

### 📸 Interactive Image Lightbox

- Click-to-zoom across gallery, project gallery, and progress photos
- Full-resolution 1920px images loaded on demand
- Prev/Next navigation + keyboard support (← → Esc)
- RTL-aware arrow direction

### 🔄 Before / After Comparison Slider

- Touch-enabled draggable slider on completed project pages
- Shows raw stone → finished design transformation

### 🏗️ Project Lifecycle Management

- Create active projects with progress photos in Sanity Studio
- Automatic routing: active → `/current-projects`, completed → `/portfolio`
- Completion requires an "After" image for quality assurance
- Progress timelines sorted by date

### 📱 Responsive & Animated

- Mobile-first layout for all screen sizes
- Scroll-linked parallax, page transitions, micro-animations
- Animated mobile menu, floating action button

### 🛡️ Serverless Contact Form

- Web3Forms integration — no backend required
- Form validation with bilingual error/success messages
- Spam protection built-in

---

## 📊 Performance

This project has been optimized for performance with the following techniques:

- ⚡ **Non-blocking font loading** — Google Fonts loaded via `media="print"` swap
- 🖼️ **Automatic modern image formats** — WebP/AVIF via Sanity CDN `auto=format`
- 📱 **Responsive images** — `srcset` serving 400px on mobile, 800px on desktop
- 🔄 **Deferred hydration** — Non-critical React components use `client:idle` / `client:visible`
- 🗜️ **Zero GSAP dependency** — Custom parallax with native `requestAnimationFrame`
- 📦 **Aggressive caching** — 1-year immutable cache headers for static assets
- 🔒 **Security headers** — CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy

---

## 🔐 Security

- All API keys and sensitive data stored in environment variables
- Content Security Policy (CSP) with strict whitelisting
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- HTTPS enforced via `upgrade-insecure-requests`

---

## 🧪 Test Results

This project has been tested across multiple industry-standard tools.

### Google PageSpeed Insights

| Metric             | Score      |
| ------------------ | ---------- |
| **Performance**    | 🟢 98/100  |
| **Accessibility**  | 🟢 95/100  |
| **Best Practices** | 🟢 100/100 |
| **SEO**            | 🟢 100/100 |
| FCP                | 0.8s       |
| LCP                | 1.0s       |
| TBT                | 0ms        |
| CLS                | 0.002      |

### Pingdom Website Speed Test

| Metric                | Result        |
| --------------------- | ------------- |
| **Performance Grade** | 🟢 A (94/100) |
| **Load Time**         | 294ms         |
| **Page Size**         | 1.1 MB        |
| **Requests**          | 14            |

### Catchpoint WebPageTest

| Metric               | Grade       |
| -------------------- | ----------- |
| First Byte Time      | 🟢 A (98.5) |
| Keep-Alive           | 🟢 A (100)  |
| Compress Transfer    | 🟢 A (100)  |
| Compress Images      | 🟢 A (100)  |
| Cache Static Content | 🟢 A (92)   |
| Effective CDN Use    | 🟢 A (100)  |

### Mozilla HTTP Observatory

| Metric           | Result         |
| ---------------- | -------------- |
| **Score**        | 🟢 B+ (80/100) |
| **Tests Passed** | 9/10           |

### GTmetrix Performance Report

| Metric          | Result |
| --------------- | ------ |
| **Grade**       | 🟢 A   |
| **Performance** | 89%    |
| **Structure**   | 100%   |
| LCP             | 1.4s   |
| TBT             | 40ms   |
| CLS             | 0      |

---

## 📁 Key Features Deep Dive

### 🏗️ Project Lifecycle Management

Engineers can manage projects through Sanity Studio with a complete workflow:

1. **Create** an active project with progress photos, location, and materials
2. **Update** with new progress photos as construction continues
3. **Complete** the project — requires an "After" image for quality assurance
4. Active projects appear on `/current-projects`, completed ones on `/portfolio`

### 🌐 Bilingual Architecture

- All content supports Arabic (RTL) and English (LTR)
- Custom `localeString` and `localeText` Sanity field types
- Language middleware detects and persists user preference
- Full i18n translation system with 50+ translation keys

### 📸 Photo Gallery System

- Multi-category photo support (each photo can belong to multiple categories)
- Filterable gallery with smooth animations
- Progress photo timelines for active projects

---

## 📄 License

This project is proprietary software developed for **Jeddah Palaces for Natural Stone**.

---

<div align="center">

**Developed by: Eng. Mohamed Ahmed Alzarzour**

</div>
