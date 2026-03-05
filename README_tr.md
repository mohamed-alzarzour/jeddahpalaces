<div align="center">

# 🏛️ Cidde Doğal Taş Sarayları (Jeddah Palaces for Natural Stone)

### قصور جدة للحجر الطبيعي

**Birinci Sınıf İç ve Dış Mekan Doğal Taş Çözümleri**

[![Canlı Demo](https://img.shields.io/badge/🌐_Live_Demo-jeddahpalaces.vercel.app-C5B080?style=for-the-badge)](https://jeddahpalaces.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-5.x-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Sanity](https://img.shields.io/badge/Sanity-Studio_v3-f36458?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

---

**Suudi Arabistan'ın Cidde** şehrinde bulunan, doğal taş ve iç mekan kaplamalarında uzmanlaşmış, tam çift dilli **(Arapça/İngilizce)** ve performans odaklı bir web uygulaması. Modern web teknolojileri ve sorunsuz içerik yönetimi için Headless CMS (Başsız İçerik Yönetim Sistemi) ile oluşturulmuştur.

[Canlı Demo](https://jeddahpalaces.vercel.app) · [Frontend Belgeleri](./frontend/README.md) · [Sanity Belgeleri](./sanity/README.md) · [GTmetrix Raporu](./gtmetrix-report.pdf)

</div>

---

## ✨ Öne Çıkanlar

- 🌐 **Çift Dilli** — Kesintisiz geçiş ile tam Arapça (Sağdan Sola - RTL) ve İngilizce (Soldan Sağa - LTR) desteği
- 🌙 **Karanlık/Aydınlık Mod** — Sıfır parlama (flash) ile yükleme ve tema tercihini kaydetme
- 📱 **Mobil Öncelikli** — Tüm cihazlar için optimize edilmiş duyarlı (responsive) tasarım
- ⚡ **Şimşek Hızında** — 98/100 PageSpeed puanı, 294ms yükleme süresi
- 🔒 **Güvenli** — CSP başlıkları, ortama göre yönetilen gizli anahtarlar, HTTPS zorunluluğu
- 🎨 **Akıcı Animasyonlar** — Paralaks kaydırma, sayfa geçişleri, mikro etkileşimler

---

## 🏗️ Proje Yapısı

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
├── sanity/                 # Sanity Studio v3
│   ├── schemaTypes/        # 10 content schemas
│   ├── desk/               # Custom desk structure
│   └── static/             # Studio assets
│
├── gtmetrix-report.pdf     # Performance audit report
├── README.md               # English project documentation
├── README_ar.md            # Arabic project documentation
└── README_tr.md            # Turkish project documentation (You are here)
```

---

## 🛠️ Teknoloji Yığını

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

## 📄 Sayfalar

| Sayfa                                  | Açıklama                                                                |
| -------------------------------------- | ----------------------------------------------------------------------- |
| **Ana Sayfa (Home)**                   | Kahraman (Hero) bölümü, öncesi/sonrası kaydırıcı ile öne çıkan projeler |
| **Ürünler (Products)**                 | Resim galerileri ile ürün kataloğu                                      |
| **Portföy (Portfolio)**                | Öncesi/sonrası dönüşümleri ile tamamlanan projeler                      |
| **Mevcut Projeler (Current Projects)** | İlerleme fotoğrafları zaman çizelgeleri ile aktif inşaat                |
| **Galeri (Gallery)**                   | Çoklu kategori desteği ile filtrelenebilir fotoğraf galerisi            |
| **Hizmetler (Services)**               | CMS üzerinden yönetilen hizmet teklifleri                               |
| **Hakkımızda (About)**                 | Şirket bilgileri ve ekip detayları                                      |
| **İletişim (Contact)**                 | İletişim formu (Web3Forms), sosyal bağlantılar, konum                   |
| **404**                                | Özel hata sayfası                                                       |

---

## 🚀 Temel Özellikler

### 🌐 Tam Çift Dilli Sistem

- Kesintisiz dil değiştirme ile tam Arapça (RTL) ve İngilizce (LTR) desteği
- Tüm içerikler için özel `localeString` ve `localeText` Sanity alan türleri
- Dil ara katman yazılımı (middleware) kullanıcı tercihini otomatik algılar ve kaydeder
- Her kullanıcı arayüzü öğesini kapsayan 50+ çeviri anahtarı

### 🌙 Karanlık / Aydınlık Mod

- Tek tıklamayla geçiş yapılabilen varsayılan karanlık tema
- Satır içi `<head>` betiği aracılığıyla anında tema uygulaması — sıfır parlama (flash)
- Tercihler `localStorage`'da kaydedilir ve oturumlar arasında korunur

### 📸 Etkileşimli Resim Görüntüleyici (Lightbox)

- Tüm galeri, proje ve ilerleme fotoğraflarında tıklayarak yakınlaştırma (zoom)
- İsteğe bağlı yüklenen tam çözünürlüklü 1920px görseller
- Klavye desteği ile Önceki/Sonraki gezinme (← → Esc)
- RTL duyarlı ok yönü

### 🔄 Öncesi / Sonrası Kaydırıcı

- Tamamlanan proje sayfalarında sürüklenebilir karşılaştırma kaydırıcısı
- Ham taştan bitmiş tasarıma dönüşümü gösterir
- Mobil cihazlar için dokunma (touch) desteği

### 🏗️ Proje Yaşam Döngüsü Yönetimi

- Mühendisler Sanity Studio üzerinden ilerleme fotoğrafları ile aktif projeler oluşturur
- Projeler tamamlandığında `/current-projects` sayfasından `/portfolio` sayfasına taşınır
- Kalite güvencesi için tamamlanma durumunda "Sonrası" resmi gereklidir
- İlerleme fotoğrafı zaman çizelgeleri tarihe göre sıralanır

### 📱 Duyarlı & Animasyonlu

- Tüm ekran boyutları için optimize edilmiş mobil öncelikli tasarım
- Kaydırma ile bağlantılı paralaks efektleri ve sayfa geçişleri
- Fareyle üzerine gelme, yüzen eylem düğmesi ve animasyonlu mobil menü üzerinde mikro animasyonlar

---

## 🧪 Test Sonuçları

**Sektör standardı 5 araç** kullanılarak test edilmiştir — tüm puanlar yeşil renktedir:

| Araç                          | Puan                                                                     |
| ----------------------------- | ------------------------------------------------------------------------ |
| **Google PageSpeed Insights** | 🟢 98 Performans · 95 Erişilebilirlik · 100 En İyi Uygulamalar · 100 SEO |
| **Pingdom**                   | 🟢 A (94/100) · 294ms yükleme süresi · 14 istek                          |
| **Catchpoint WebPageTest**    | 🟢 7 metriğin tümünde A derecesi                                         |
| **Mozilla HTTP Observatory**  | 🟢 B+ (80/100) · 9/10 test geçildi                                       |
| **GTmetrix**                  | 🟢 A Derecesi · 89% Performans · 100% Yapı                               |

> 📄 Tam GTmetrix PDF raporu: [`gtmetrix-report.pdf`](./gtmetrix-report.pdf)

---

## 🔐 Güvenlik

| Measure                     | Status |
| --------------------------- | ------ |
| Environment-managed secrets | ✅     |
| Content Security Policy     | ✅     |
| X-Content-Type-Options      | ✅     |
| X-Frame-Options             | ✅     |
| Referrer-Policy             | ✅     |
| HTTPS enforced              | ✅     |

---

## 📖 Belgeler

| Belge                                          | Açıklama                                                                         |
| ---------------------------------------------- | -------------------------------------------------------------------------------- |
| [`frontend/README.md`](./frontend/README.md)   | Tam frontend belgeleri — mimari, özellikler, performans derinlemesine incelemesi |
| [`sanity/README.md`](./sanity/README.md)       | Sanity Studio belgeleri — şemalar, çalışma masası yapısı, proje iş akışı         |
| [`gtmetrix-report.pdf`](./gtmetrix-report.pdf) | Ayrıntılı GTmetrix performans denetimi                                           |
| [`README_ar.md`](./README_ar.md)               | Arapça proje dokümantasyonu                                                      |
| [`README_tr.md`](./README_tr.md)               | Türkçe proje dokümantasyonu                                                      |

---

## 📄 Lisans

Bu proje, **Jeddah Palaces for Natural Stone** (Cidde Doğal Taş Sarayları) için geliştirilmiş tescilli (proprietary) bir yazılımdır.

---

<div align="center">

**Mühendis Mohamed Ahmed Alzarzour tarafından oluşturulmuştur**

_Cidde, Suudi Arabistan 🇸🇦_

</div>
