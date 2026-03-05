import {defineType} from 'sanity'

export default defineType({
  name: 'localeText',
  title: 'نص طويل مترجم',
  type: 'object',
  fields: [
    {
      name: 'ar',
      title: 'عربي',
      type: 'text',
      rows: 5,
    },
    {
      name: 'en',
      title: 'إنجليزي',
      type: 'text',
      rows: 5,
    },
  ],
})