import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'engineerName',
      title: 'Engineer Name',
      type: 'localeString',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'localeText',
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'localeText',
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise',
      type: 'localeText',
    }),
    defineField({
      name: 'philosophy',
      title: 'Philosophy',
      type: 'localeText',
    }),
    defineField({
      name: 'photo',
      title: 'Engineer Photo (No Background)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})