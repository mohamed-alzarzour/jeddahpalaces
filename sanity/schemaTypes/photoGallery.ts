import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photoGallery',
  title: 'معرض الصور',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'عنوان المعرض',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'وصف المعرض',
      type: 'localeText',
    }),
    defineField({
      name: 'photos',
      title: 'الصور',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'الصورة',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'التعليق (اختياري)',
              type: 'localeString',
            },
            {
              name: 'categories',
              title: 'التصنيفات (اختياري)',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                list: [
                  {title: 'داخلي', value: 'interior'},
                  {title: 'خارجي', value: 'exterior'},
                  {title: 'حجر طبيعي', value: 'natural-stone'},
                  {title: 'رخام', value: 'marble'},
                  {title: 'جرانيت', value: 'granite'},
                  {title: 'GRC', value: 'grc'},
                  {title: 'أخرى', value: 'other'},
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'caption.ar',
              categories: 'categories',
              media: 'image',
            },
            prepare({title, categories, media}) {
              return {
                title: title || 'صورة بدون عنوان',
                subtitle: Array.isArray(categories) ? categories.join(', ') : '',
                media,
              }
            },
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
})
