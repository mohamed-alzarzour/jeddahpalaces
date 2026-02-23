// TypeScript types for Sanity schemas

export interface LocaleString {
    ar?: string;
    en?: string;
}

export interface LocaleText {
    ar?: string;
    en?: string;
}

export interface SanityImage {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
    hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
    };
    crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
}

export interface Product {
    _id: string;
    _type: 'product';
    name: LocaleString;
    slug: {
        current: string;
    };
    category?: string;
    mainImage: SanityImage;
    gallery?: SanityImage[];
    description?: LocaleText;
    specifications?: Array<{
        label: LocaleString;
        value: LocaleString;
    }>;
}

export interface Project {
    _id: string;
    _type: 'project';
    title: LocaleString;
    slug: {
        current: string;
    };
    beforeImage: SanityImage;
    afterImage: SanityImage;
    gallery?: SanityImage[];
    description?: LocaleText;
    relatedProducts?: Product[];
    category?: 'interior' | 'exterior' | 'both';
    year?: number;
}

export interface Service {
    _id: string;
    _type: 'service';
    title: LocaleString;
    description?: LocaleText;
    icon?: SanityImage;
    order: number;
}

export interface HomepageSettings {
    _id: string;
    _type: 'homepageSettings';
    heroTitle?: LocaleString;
    heroDescription?: LocaleText;
    heroImage?: SanityImage;
    featuredProjects?: Project[];
}

export interface AboutPage {
    _id: string;
    _type: 'aboutPage';
    engineerName?: LocaleString;
    bio?: LocaleText;
    experience?: LocaleText;
    expertise?: LocaleText;
    philosophy?: LocaleText;
    photo?: SanityImage;
}

export interface ContactInfo {
    _id: string;
    _type: 'contactInfo';
    email?: string;
    phone?: string;
    address?: LocaleText;
    socialMedia?: Array<{
        platform: string;
        url: string;
    }>;
}

export interface GalleryPhoto {
    image: SanityImage;
    caption?: LocaleString;
    category?: string;
}

export interface PhotoGallery {
    _id: string;
    _type: 'photoGallery';
    title?: LocaleString;
    description?: LocaleText;
    photos?: GalleryPhoto[];
}
