import {defineType} from 'sanity'

export default defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    {
      name: 'ar',
      title: 'Arabic',
      type: 'text',
      rows: 5,
    },
    {
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 5,
    },
  ],
})