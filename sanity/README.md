<div align="center">

# 🏛️ JPNS — Sanity Studio

### Content Management for Jeddah Palaces Website

</div>

---

## 📋 Overview

This is a **fully customized Sanity Studio** backend for the Jeddah Palaces website. Unlike a default Sanity installation, this studio has been redesigned from the ground up with a **custom dashboard, branded dark theme, and simplified navigation** — making it intuitive and easy to use even for non-technical content editors. It manages all website content in both **Arabic** and **English**.

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

## 🚀 CMS Features

- **Custom Dashboard** — A visual, icon-based homepage with emoji-labeled sections replaces the default Sanity desk, so editors always know where to go
- **Branded Dark Theme** — The entire studio uses a custom gold-and-dark color palette (`#C5B080` / `#1a1918`) that matches the main website branding
- **Custom Navbar** — A modified navigation bar with auto-aligned UI elements for a polished look
- **Mobile-Responsive Admin** — The custom dashboard adapts to all screen sizes, allowing content updates from phones and tablets
- **Simplified Navigation** — Content is organized into clear, intuitive sections: Page Settings, Projects, and Products & Services
- **Bilingual Content Editing** — Every text field provides side-by-side Arabic and English inputs via custom `localeString` / `localeText` types
- **One-Click Workflow** — Create projects, upload progress photos, and mark them as completed — all from a straightforward interface
- **Custom Desk Structure** — Organized sidebar with settings, projects filtered by status, products, and services
- **Singleton Documents** — Homepage, About, Contact, and Gallery managed as single-instance documents
- **Image Pipeline** — Sanity CDN with automatic WebP/AVIF, responsive sizing, and hotspot cropping
- **Progress Photo Timelines** — Dated photos sorted chronologically for each project
- **Multi-Category Gallery** — Photos tagged with multiple categories for filterable gallery display
- **Type Generation** — Auto-generated TypeScript types via `sanity typegen` for type-safe frontend queries

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
├── components/
│   ├── Dashboard.tsx          # Custom visual dashboard
│   └── CustomNavbar.tsx       # Custom navigation bar
├── desk/
│   └── structure.ts           # Custom desk layout
├── static/
│   ├── logo.png               # Studio logo
│   ├── favicon.ico            # Custom tab icon
│   └── custom.css             # Studio theme overrides
├── theme.ts                   # Custom dark theme
├── global.d.ts                # TypeScript declarations
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
