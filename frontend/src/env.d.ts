/// <reference types="astro/client" />
/// <reference types="@sanity/image-url" />

interface ImportMetaEnv {
    readonly PUBLIC_SANITY_PROJECT_ID: string;
    readonly PUBLIC_SANITY_DATASET: string;
    readonly PUBLIC_SANITY_API_VERSION: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare namespace App {
    interface Locals {
        lang: string;
    }
}
