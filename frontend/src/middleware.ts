import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
    const cookieLang = context.cookies.get('jpns_language')?.value;

    let lang = cookieLang || 'ar';

    if (lang !== 'ar' && lang !== 'en') {
        lang = 'ar';
    }

    context.locals.lang = lang;

    return next();
});
