import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'الخدمات',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'اسم الخدمة',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'الوصف',
      type: 'localeText',
    }),
    defineField({
      name: 'icon',
      title: 'الأيقونة / الصورة',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'ترتيب العرض',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: 'title.ar',
      media: 'icon',
    },
  },
})