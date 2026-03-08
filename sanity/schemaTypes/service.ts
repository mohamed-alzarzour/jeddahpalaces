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
      description: 'رقم الترتيب — الأصغر يظهر أولاً (يتم تعيينه تلقائياً)',
      validation: (Rule) => Rule.required().min(1).integer(),
    }),
  ],

  // Auto-assign next order number for new services
  initialValue: async (_params, {getClient}) => {
    const client = getClient({apiVersion: '2024-01-01'})
    const maxOrder = await client.fetch<number | null>(
      `*[_type == "service"] | order(order desc) [0].order`
    )
    return {
      order: (maxOrder || 0) + 1,
    }
  },

  preview: {
    select: {
      title: 'title.ar',
      media: 'icon',
      order: 'order',
    },
    prepare({title, media, order}) {
      return {
        title: title || 'بدون عنوان',
        subtitle: order ? `ترتيب: ${order}` : '',
        media,
      }
    },
  },
})