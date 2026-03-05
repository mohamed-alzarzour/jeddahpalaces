import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'صفحة من نحن',
  type: 'document',
  fields: [
    defineField({
      name: 'engineerName',
      title: 'اسم المهندس',
      type: 'localeString',
    }),
    defineField({
      name: 'bio',
      title: 'السيرة الذاتية',
      type: 'localeText',
    }),
    defineField({
      name: 'experience',
      title: 'الخبرة',
      type: 'localeText',
    }),
    defineField({
      name: 'expertise',
      title: 'التخصص',
      type: 'localeText',
    }),
    defineField({
      name: 'philosophy',
      title: 'الفلسفة',
      type: 'localeText',
    }),
    defineField({
      name: 'photo',
      title: 'صورة المهندس (بدون خلفية)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})