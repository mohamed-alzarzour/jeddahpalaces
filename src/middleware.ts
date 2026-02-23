import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
    const cookieLang = context.cookies.get('jpns_language')?.value;

    // Default to Arabic if no cookie
    let lang = cookieLang || 'ar';

    // Validate language
    if (lang !== 'ar' && lang !== 'en') {
        lang = 'ar';
    }

    // Make language available to pages/components
    context.locals.lang = lang;

    return next();
});
