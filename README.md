<div align="center">

# 🏛️ Jeddah Palaces for Natural Stone

### قصور جدة للحجر الطبيعي

**Premium Interior & Exterior Natural Stone Solutions**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-jeddahpalaces.vercel.app-C5B080?style=for-the-badge)](https://jeddahpalaces.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-5.x-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Sanity](https://img.shields.io/badge/Sanity-Studio_v3-f36458?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

---

A fully bilingual **(Arabic/English)**, performance-optimized web application specializing in natural stone and interior finishes, based in **Jeddah, Saudi Arabia**. Built with modern web technologies and a headless CMS for seamless content management.

[Live Demo](https://jeddahpalaces.vercel.app) · [Frontend Docs](./frontend/README.md) · [Sanity Docs](./sanity/README.md) · [GTmetrix Report](./gtmetrix-report.pdf)

</div>

---

## ✨ Highlights

- 🌐 **Bilingual** — Full Arabic (RTL) and English (LTR) with seamless toggle
- 🌙 **Dark/Light Mode** — Theme persistence with zero-flash loading
- 📱 **Mobile-First** — Responsive design optimized for all devices
- ⚡ **Lightning Fast** — 98/100 PageSpeed score, 294ms load time
- 🔒 **Secure** — CSP headers, environment-managed secrets, HTTPS enforced
- 🎨 **Smooth Animations** — Parallax scrolling, page transitions, micro-interactions

---

## 🏗️ Project Structure

```
jeddahpalaces/
├── frontend/               # Astro 5 web application
│   ├── src/
│   │   ├── components/     # 13 reusable components (Astro + React)
│   │   ├── pages/          # 9 pages + dynamic routes
│   │   ├── layouts/        # BaseLayout with SEO
│   │   ├── lib/            # Sanity client, i18n, types
│   │   └── styles/         # Global CSS + Tailwind
│   ├── public/             # Static assets
│   └── vercel.json         # Security headers + caching
│
├── sanity/                 # Sanity Studio v3
│   ├── schemaTypes/        # 10 content schemas
│   ├── desk/               # Custom desk structure
│   └── static/             # Studio assets
│
├── gtmetrix-report.pdf     # Performance audit report
└── README.md               # You are here
```

---

## 🛠️ Tech Stack

| Layer          | Technology                                                |
| -------------- | --------------------------------------------------------- |
| **Framework**  | [Astro 5](https://astro.build) — Static + SSR hybrid      |
| **UI**         | [React 18](https://react.dev) — Interactive islands       |
| **Styling**    | [Tailwind CSS 3](https://tailwindcss.com) — Utility-first |
| **CMS**        | [Sanity v3](https://sanity.io) — Headless CMS             |
| **Deployment** | [Vercel](https://vercel.com) — Edge SSR + CDN             |
| **Forms**      | [Web3Forms](https://web3forms.com) — Serverless forms     |
| **Language**   | [TypeScript](https://typescriptlang.org) — Type-safe      |

---

## 📄 Pages

| Page                 | Description                                               |
| -------------------- | --------------------------------------------------------- |
| **Home**             | Hero section, featured projects with before/after sliders |
| **Products**         | Product catalog with image galleries                      |
| **Portfolio**        | Completed projects with before/after transformations      |
| **Current Projects** | Active construction with progress photo timelines         |
| **Gallery**          | Filterable photo gallery with multi-category support      |
| **Services**         | Service offerings managed via CMS                         |
| **About**            | Company information and team details                      |
| **Contact**          | Contact form (Web3Forms), social links, location          |
| **404**              | Custom error page                                         |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+
- A [Sanity](https://sanity.io) account
- A [Web3Forms](https://web3forms.com) access key

### Setup

```bash
# Clone the repository
git clone https://github.com/mohamed-alzarzour/jeddahpalaces.git
cd jeddahpalaces

# Frontend
cd frontend
npm install
cp .env.example .env    # Edit with your actual values
npm run dev             # → http://localhost:4321

# Sanity Studio (separate terminal)
cd ../sanity
npm install
npm run dev             # → http://localhost:3333
```

### Environment Variables

Create `frontend/.env` from the example file:

```env
# Sanity CMS
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=**********
PUBLIC_SANITY_API_VERSION=20**-**-**

# Web3Forms
PUBLIC_WEB3FORMS_KEY=your_web3forms_key
PUBLIC_CONTACT_EMAIL=your@email.com
```

---

## 🧪 Test Results

Tested across **5 industry-standard tools** — all scores in the green:

| Tool                          | Score                                                               |
| ----------------------------- | ------------------------------------------------------------------- |
| **Google PageSpeed Insights** | 🟢 98 Performance · 95 Accessibility · 100 Best Practices · 100 SEO |
| **Pingdom**                   | 🟢 A (94/100) · 294ms load time · 14 requests                       |
| **Catchpoint WebPageTest**    | 🟢 All A grades across 7 metrics                                    |
| **Mozilla HTTP Observatory**  | 🟢 B+ (80/100) · 9/10 tests passed                                  |
| **GTmetrix**                  | 🟢 Grade A · 89% Performance · 100% Structure                       |

> 📄 Full GTmetrix PDF report: [`gtmetrix-report.pdf`](./gtmetrix-report.pdf)

---

## 🔐 Security

| Measure                     | Status |
| --------------------------- | ------ |
| Environment-managed secrets | ✅     |
| Content Security Policy     | ✅     |
| X-Content-Type-Options      | ✅     |
| X-Frame-Options             | ✅     |
| Referrer-Policy             | ✅     |
| HTTPS enforced              | ✅     |

---

## 📖 Documentation

| Document                                       | Description                                                                 |
| ---------------------------------------------- | --------------------------------------------------------------------------- |
| [`frontend/README.md`](./frontend/README.md)   | Full frontend documentation — architecture, features, performance deep dive |
| [`sanity/README.md`](./sanity/README.md)       | Sanity Studio docs — schemas, desk structure, project workflow              |
| [`gtmetrix-report.pdf`](./gtmetrix-report.pdf) | Detailed GTmetrix performance audit                                         |

---

## 📄 License

This project is proprietary software developed for **Jeddah Palaces for Natural Stone**.

---

<div align="center">

**Built by Eng. Mohamed Ahmed Alzarzour**

_Jeddah, Saudi Arabia 🇸🇦_

</div>
