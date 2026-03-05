import {defineType} from 'sanity'

export default defineType({
  name: 'localeString',
  title: 'نص مترجم',
  type: 'object',
  fields: [
    {
      name: 'ar',
      title: 'عربي',
      type: 'string',
    },
    {
      name: 'en',
      title: 'إنجليزي',
      type: 'string',
    },
  ],
})