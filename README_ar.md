<div align="center">

# 🏛️ قصور جدة للحجر الطبيعي

### Jeddah Palaces for Natural Stone

**حلول متميزة للحجر الطبيعي الداخلي والخارجي**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-jeddahpalaces.vercel.app-C5B080?style=for-the-badge)](https://jeddahpalaces.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-5.x-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Sanity](https://img.shields.io/badge/Sanity-Studio_v3-f36458?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

---

تطبيق ويب ثنائي اللغة بالكامل **(عربي/إنجليزي)**، مُحسّن الأداء ومتخصص في الحجر الطبيعي والتشطيبات الداخلية، مقره في **جدة، المملكة العربية السعودية**. مبني بأحدث تقنيات الويب ونظام إدارة محتوى (Headless CMS) لإدارة المحتوى بسلاسة.

[العرض المباشر](https://jeddahpalaces.vercel.app) · [توثيق الواجهة الأمامية](./frontend/README.md) · [توثيق Sanity](./sanity/README.md) · [تقرير GTmetrix](./gtmetrix-report.pdf)

</div>

---

## ✨ أبرز الميزات

- 🌐 **ثنائي اللغة** — دعم كامل للغتين العربية (RTL) والإنجليزية (LTR) مع تبديل سلس.
- 🌙 **الوضع الداكن/الفاتح** — حفظ السمة المفضلة مع تحميل فوري دون وميض.
- 📱 **تصميم ملائم للجوال** — تصميم متجاوب ومُحسّن لجميع الأجهزة.
- ⚡ **سريع للغاية** — تقييم 98/100 على PageSpeed، ووقت تحميل 294 جزء من الثانية.
- 🔒 **آمن** — ترويسات CSP، إدارة أسرار البيئة، وفرض بروتوكول HTTPS.
- 🎨 **حركات سلسة** — تمرير Parallax، انتقالات بين الصفحات، وتفاعلات دقيقة.

---

## 🏗️ هيكل المشروع

```text
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
├── sanity/                 # Customized Sanity Studio v3
│   ├── schemaTypes/        # 10 content schemas
│   ├── components/         # Custom Dashboard & Navbar
│   ├── desk/               # Custom desk structure
│   └── static/             # Studio assets & branding
│
├── gtmetrix-report.pdf     # Performance audit report
├── README.md               # English project documentation
├── README_ar.md            # Arabic project documentation (You are here)
└── README_tr.md            # Turkish project documentation
```

---

## 🛠️ التقنيات المستخدمة

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

## 📄 الصفحات

| الصفحة                                  | الوصف                                                      |
| --------------------------------------- | ---------------------------------------------------------- |
| **الرئيسية (Home)**                     | قسم البداية، المشاريع المميزة مع شريط تمرير قبل/بعد        |
| **المنتجات (Products)**                 | كتالوج المنتجات مع معارض الصور                             |
| **معرض الأعمال (Portfolio)**            | المشاريع المنجزة مع تحويلات قبل/بعد                        |
| **المشاريع الحالية (Current Projects)** | البناء النشط مع جداول زمنية لصور التقدم                    |
| **المعرض (Gallery)**                    | معرض صور قابل للتصفية مع دعم فئات متعددة                   |
| **الخدمات (Services)**                  | عروض الخدمات المدارة عبر نظام إدارة المحتوى                |
| **من نحن (About)**                      | معلومات الشركة وتفاصيل فريق العمل                          |
| **اتصل بنا (Contact)**                  | نموذج الاتصال (Web3Forms)، روابط التواصل الاجتماعي، الموقع |
| **404**                                 | صفحة خطأ مخصصة                                             |

---

## 🚀 الميزات الرئيسية

### 🌐 نظام ثنائي اللغة كامل

- دعم كامل للغة العربية (من اليمين لليسار) والإنجليزية (من اليسار لليمين) مع تبديل سلس.
- حقول مخصصة `localeString` و `localeText` في Sanity لجميع المحتويات.
- وسيط (Middleware) يكتشف تلقائياً ويحفظ لغة المستخدم المفضلة.
- أكثر من 50 مفتاح ترجمة يغطي كل عنصر في واجهة المستخدم.

### 🌙 الوضع الداكن / الفاتح

- السمة الداكنة هي الافتراضية مع إمكانية التبديل بنقرة واحدة.
- تطبيق السمة فورياً عبر نص برمجي مدمج في `<head>` — بدون أي وميض.
- تُحفظ السمة المفضلة في `localStorage` وتستمر عبر الجلسات.

### 📸 عارض الصور التفاعلي (Lightbox)

- تكبير عند النقر على جميع الصور في المعرض والمشاريع.
- تحميل صور بدقة كاملة (1920 بكسل) عند الطلب.
- تنقل (السابق/التالي) مع دعم لوحة المفاتيح (← → Esc).
- اتجاه الأسهم متوافق مع الاتجاه (من اليمين لليسار).

### 🔄 شريط تمرير قبل / بعد

- شريط تمرير لمقارنة الصور في صفحات المشاريع المنجزة.
- يوضح التحول من الحجر الخام إلى التصميم النهائي.
- يدعم اللمس للأجهزة المحمولة.

### 🏗️ إدارة دورة حياة المشاريع

- ينشئ المهندسون مشاريع نشطة مع صور للتقدم من خلال Sanity Studio.
- تنتقل المشاريع من `/current-projects` إلى `/portfolio` عند اكتمالها.
- يتطلب الاكتمال صورة "بعد" لضمان الجودة.
- يتم فرز الصور الزمنية للتقدم حسب التاريخ.

### 📱 متجاوب ومتحرك

- تصميم مُحسّن لجميع أحجام الشاشات.
- تأثيرات التمرير (Parallax) وانتقالات الصفحات المرتبطة بالتمرير.
- حركات دقيقة عند التمرير بالماوس، زر الإجراء العائم، وقائمة متحركة للجوال.

### 🎛️ استوديو Sanity مخصص

نظام إدارة المحتوى ليس تثبيتاً افتراضياً — إنه **استوديو مخصص بالكامل** مصمّم للبساطة وسهولة الاستخدام:

- **لوحة تحكم مخصصة** — صفحة رئيسية بصرية بأيقونات تعبيرية تستبدل مكتب Sanity الافتراضي، مما يجعل التنقل بديهياً حتى للمستخدمين غير التقنيين
- **سمة داكنة بالعلامة التجارية** — الاستوديو بالكامل يطابق لوحة ألوان قصور جدة الذهبية والداكنة
- **تحرير محتوى ثنائي اللغة** — كل حقل نصي يوفر إدخال عربي وإنجليزي جنباً إلى جنب، مما يجعل إدارة المحتوى متعدد اللغات سهلة
- **إدارة متوافقة مع الجوال** — لوحة التحكم المخصصة متجاوبة وتسمح بتحديث المحتوى من أي جهاز
- **تنقل مبسّط** — المحتوى منظم في أقسام واضحة (الصفحات، المشاريع، المنتجات والخدمات) بأيقونات تعبيرية
- **سير عمل بنقرة واحدة** — يمكن إنشاء المشاريع وتحديثها بصور التقدم وتمييزها كمكتملة — كله من واجهة نظيفة وبسيطة

---

## 🧪 نتائج الاختبار

تم اختباره عبر **5 أدوات معتمدة في الصناعة** — جميع التقييمات في النطاق الأخضر:

| الأداة                        | التقييم                                                         |
| ----------------------------- | --------------------------------------------------------------- |
| **Google PageSpeed Insights** | 🟢 98 الأداء · 95 إمكانية الوصول · 100 أفضل الممارسات · 100 SEO |
| **Pingdom**                   | 🟢 A (94/100) · 294ms وقت التحميل · 14 طلب                      |
| **Catchpoint WebPageTest**    | 🟢 الدرجة A في جميع المقاييس السبعة                             |
| **Mozilla HTTP Observatory**  | 🟢 B+ (80/100) · ناجح في 9/10 اختبارات                          |
| **GTmetrix**                  | 🟢 الدرجة A · 89% الأداء · 100% الهيكل                          |

> 📄 تقرير GTmetrix الكامل بصيغة PDF: [`gtmetrix-report.pdf`](./gtmetrix-report.pdf)

---

## 🔐 الأمان

| الإجراء                          | الحالة |
| ------------------------------ | ----- |
| إدارة الأسرار عبر البيئة          | ✅    |
| Content Security Policy        | ✅    |
| Strict-Transport-Security      | ✅    |
| X-Content-Type-Options         | ✅    |
| X-Frame-Options                | ✅    |
| X-DNS-Prefetch-Control         | ✅    |
| Referrer-Policy                | ✅    |
| فرض HTTPS                      | ✅    |

---

## 📖 التوثيق

| المستند                                        | الوصف                                                        |
| ---------------------------------------------- | ------------------------------------------------------------ |
| [`frontend/README.md`](./frontend/README.md)   | توثيق كامل للواجهة الأمامية — الهندسة، الميزات، وعمق الأداء  |
| [`sanity/README.md`](./sanity/README.md)       | توثيق Sanity Studio — المخططات، هيكل المكتب، سير عمل المشروع |
| [`gtmetrix-report.pdf`](./gtmetrix-report.pdf) | تدقيق أداء GTmetrix مفصل                                     |
| [`README_ar.md`](./README_ar.md)               | معلومات المشروع الأساسية باللغة العربية                      |
| [`README_tr.md`](./README_tr.md)               | معلومات المشروع الأساسية باللغة التركية                      |

---

## 📄 الترخيص

هذا المشروع هو برنامج احتكاري تم تطويره لصالح **قصور جدة للحجر الطبيعي**.

---

<div align="center">

**بُني بواسطة المهندس محمد أحمد الزرزور**

_جدة، المملكة العربية السعودية 🇸🇦_

</div>
