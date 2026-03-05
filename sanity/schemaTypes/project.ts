import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'المشاريع',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'اسم المشروع',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'الرابط',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      description: 'اضغط "Generate" لإنشاء الرابط تلقائياً من الاسم الإنجليزي',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'حالة المشروع',
      type: 'string',
      options: {
        list: [
          {title: '🏗️ جاري التنفيذ', value: 'active'},
          {title: '✅ مكتمل', value: 'completed'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'الوصف',
      type: 'localeText',
    }),
    defineField({
      name: 'location',
      title: 'الموقع',
      type: 'localeString',
    }),
    defineField({
      name: 'startDate',
      title: 'تاريخ البدء',
      type: 'date',
    }),
    defineField({
      name: 'beforeImage',
      title: 'صورة قبل',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'اختياري. إذا لم يتم تعيينها، سيتم استخدام صورة بعد كصورة رئيسية.',
    }),
    defineField({
      name: 'afterImage',
      title: 'صورة بعد (الصورة الرئيسية)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'الصورة الرئيسية للعرض. مطلوبة لإكمال المشروع.',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context?.parent as {status?: string} | undefined
          if (parent?.status === 'completed' && !value) {
            return 'صورة بعد مطلوبة لتحديد المشروع كمكتمل'
          }
          return true
        }),
    }),
    defineField({
      name: 'progressPhotos',
      title: 'صور التقدم',
      type: 'array',
      description: 'صور سير العمل — أضف صوراً كلما تقدم المشروع.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'الصورة',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'التعليق',
              type: 'localeString',
            },
            {
              name: 'date',
              title: 'تاريخ الالتقاط',
              type: 'date',
            },
          ],
          preview: {
            select: {
              title: 'caption.ar',
              subtitle: 'date',
              media: 'image',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'صورة تقدم',
                subtitle: subtitle || '',
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
    defineField({
      name: 'relatedProducts',
      title: 'المواد المستخدمة',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
    defineField({
      name: 'category',
      title: 'التصنيف',
      type: 'string',
      options: {
        list: [
          {title: 'داخلي', value: 'interior'},
          {title: 'خارجي', value: 'exterior'},
          {title: 'داخلي وخارجي', value: 'both'},
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'السنة',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title.ar',
      status: 'status',
      media: 'afterImage',
    },
    prepare({title, status, media}) {
      const emoji = status === 'completed' ? '✅' : '🏗️'
      return {
        title: `${emoji} ${title || 'بدون عنوان'}`,
        media,
      }
    },
  },
})