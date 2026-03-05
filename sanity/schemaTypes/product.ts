import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'المنتجات',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'اسم المنتج',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'الرابط',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
      description: 'اضغط "Generate" لإنشاء الرابط تلقائياً',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'التصنيف',
      type: 'string',
      options: {
        list: [
          {title: 'حجر طبيعي', value: 'natural-stone'},
          {title: 'رخام', value: 'marble'},
          {title: 'جرانيت', value: 'granite'},
          {title: 'GRC', value: 'grc'},
          {title: 'إكسسوارات', value: 'accessories'},
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'الصورة الرئيسية',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'معرض صور المنتج',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'الوصف',
      type: 'localeText',
    }),
    defineField({
      name: 'specifications',
      title: 'المواصفات',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'المسمى',
              type: 'localeString',
            },
            {
              name: 'value',
              title: 'القيمة',
              type: 'localeString',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name.ar',
      media: 'mainImage',
    },
  },
})