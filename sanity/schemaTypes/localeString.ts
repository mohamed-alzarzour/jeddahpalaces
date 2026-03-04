import {defineType} from 'sanity'

export default defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: [
    {
      name: 'ar',
      title: 'Arabic',
      type: 'string',
    },
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
  ],
})