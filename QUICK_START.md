# Jeddah Palaces Website - Quick Start Guide

## 🎉 Project Complete!

Your bilingual portfolio website is ready to go. Here's everything you need to know:

## 📂 Project Structure

```
JPNS/
├── sanity/          # Your existing Sanity Studio (running on :3333)
└── frontend/        # New Astro website (runs on :4321)
```

## 🚀 Quick Start

### 1. Run the Development Server

```bash
cd frontend
npm run dev
```

Visit: http://localhost:4321

### 2. Configure Contact Form (Required)

The contact form needs a Web3Forms access key:

1. Go to https://web3forms.com/
2. Create free account
3. Get your access key
4. Open `src/components/ContactForm.tsx`
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` on line 52

## 📄 All Pages Ready

✅ Homepage (/) - Hero + Featured Projects  
✅ Products (/products) - Grid with galleries  
✅ Product Detail (/products/[slug]) - Dynamic pages  
✅ Portfolio (/portfolio) - All projects with sliders  
✅ Services (/services) - Service cards  
✅ About (/about) - Company/engineer bio  
✅ Contact (/contact) - Form + info  

## 🎯 Key Features

- **Bilingual**: Arabic (RTL) + English (LTR)
- **Dark Mode**: Toggle in header (persists)
- **Before/After Sliders**: For project showcases
- **Auto-Rotating Galleries**: Product images
- **Responsive**: Works on all devices
- **SEO Optimized**: Meta tags, Open Graph, etc.
- **Accessible**: WCAG 2.1 AA compliant

## 🔧 Build for Production

```bash
npm run build
npm run preview
```

## 🚀 Deploy to Vercel

### Option 1: GitHub + Vercel Dashboard
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy!

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Environment Variables (Add in Vercel)
```
PUBLIC_SANITY_PROJECT_ID=pch9lqf5
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-12-01
```

## 📝 Notes

- Make sure Sanity Studio has content before testing
- The website gracefully handles empty states
- All 425 dependencies installed (0 vulnerabilities)
- Images auto-optimized by Sanity CDN

## 📖 Full Documentation

- [`README.md`](file:///c:/Users/user/OneDrive/Desktop/JPNS/frontend/README.md) - Complete setup guide
- [`walkthrough.md`](file:///C:/Users/user/.gemini/antigravity/brain/40855b3c-77eb-4f9d-bf39-a5389231ce13/walkthrough.md) - Detailed walkthrough of all features

## 🆘 Need Help?

Contact: mhamd200211@gmail.com

---

**Everything is ready! Just configure Web3Forms and deploy! 🎉**
