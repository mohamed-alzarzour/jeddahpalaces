import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageSettings',
  title: 'إعدادات الصفحة الرئيسية',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'عنوان القسم الرئيسي',
      type: 'localeString',
    }),
    defineField({
      name: 'heroDescription',
      title: 'وصف القسم الرئيسي',
      type: 'localeText',
    }),
    defineField({
      name: 'heroImage',
      title: 'صورة القسم الرئيسي (بدون خلفية)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featuredProjects',
      title: 'المشاريع المميزة',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
  ],
})