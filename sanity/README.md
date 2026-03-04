<div align="center">

# 🏛️ JPNS — Sanity Studio

### Content Management for Jeddah Palaces Website

</div>

---

## 📋 Overview

This is the **Sanity Studio** backend for the Jeddah Palaces website. It provides a customized content management interface for managing projects, products, services, and all website content in both **Arabic** and **English**.

---

## 🗂️ Content Schemas

| Schema                | Type      | Description                                                                                           |
| --------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| **Project**           | Document  | Construction projects with before/after images, progress photos, status workflow (active → completed) |
| **Product**           | Document  | Natural stone products with galleries, specifications, and category filtering                         |
| **Service**           | Document  | Company services with bilingual titles and descriptions                                               |
| **Homepage Settings** | Singleton | Hero section content and featured project selection                                                   |
| **About Page**        | Singleton | Engineer bio, experience, expertise, and philosophy                                                   |
| **Contact Info**      | Singleton | Email, phone, address, business hours, and social media links                                         |
| **Photo Gallery**     | Singleton | Multi-category photo gallery with filterable categories                                               |
| **Locale String**     | Type      | Bilingual short text field (AR/EN)                                                                    |
| **Locale Text**       | Type      | Bilingual long text field (AR/EN)                                                                     |

---

## 🏗️ Custom Desk Structure

The Studio uses a custom desk layout organized into:

```
📁 Content
├── ⚙️ Settings
│   ├── Homepage Settings    (singleton)
│   ├── About Page           (singleton)
│   ├── Contact Information  (singleton)
│   └── Photo Gallery        (singleton)
├── ─────────────────────
├── 🏗️ Current Projects     (filtered: status = "active")
├── ✅ Completed Projects    (filtered: status = "completed")
├── ─────────────────────
├── 🪨 Products
└── 🛠️ Services
```

---

## 🔄 Project Workflow

1. **Create** → New project starts as **Active** with progress photos
2. **Update** → Add progress photos throughout construction
3. **Complete** → Mark as completed (requires an "After" image)
4. Active projects display on `/current-projects` with progress timelines
5. Completed projects move to `/portfolio` with before/after comparisons

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+
- A [Sanity](https://sanity.io) account and project

### Installation

```bash
cd sanity
npm install
```

### Development

```bash
npm run dev
```

Studio will be available at `http://localhost:****`

### Deployment

```bash
npm run deploy
```

### Regenerate Types

```bash
npm run typegen
```

This extracts `schema.json` and generates `sanity.types.ts`.

---

## 📁 Project Structure

```
sanity/
├── schemaTypes/           # Content schemas
│   ├── index.ts               # Schema registry
│   ├── project.ts             # Project schema (core)
│   ├── product.ts             # Product catalog
│   ├── service.ts             # Services
│   ├── homepageSettings.ts    # Homepage config
│   ├── aboutPage.ts           # About page
│   ├── contactInfo.ts         # Contact details
│   ├── photoGallery.ts        # Gallery system
│   ├── localeString.ts        # i18n short text
│   └── localeText.ts          # i18n long text
├── desk/
│   └── structure.ts           # Custom desk layout
├── static/
│   └── logo.png               # Studio logo
├── sanity.config.tsx          # Studio configuration
├── sanity.cli.ts              # CLI configuration
├── sanity.types.ts            # Auto-generated types
└── schema.json                # Auto-generated schema
```

---

## 🧪 Test Results

The full website (frontend + Sanity CMS backend) has been tested across industry-standard tools:

| Tool                          | Score                                            |
| ----------------------------- | ------------------------------------------------ |
| **Google PageSpeed Insights** | 🟢 98 Performance · 100 Best Practices · 100 SEO |
| **Pingdom**                   | 🟢 A (94/100) · 294ms load time                  |
| **Catchpoint WebPageTest**    | 🟢 All A grades                                  |
| **Mozilla HTTP Observatory**  | 🟢 B+ (80/100) · 9/10 tests passed               |
| **GTmetrix**                  | 🟢 Grade A · 89% Performance · 100% Structure    |

---

<div align="center">

**Part of the [Jeddah Palaces](https://jeddahpalaces.vercel.app) project**

</div>
