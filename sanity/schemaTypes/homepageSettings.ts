import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageSettings',
  title: 'Homepage Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'localeString',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'localeText',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (No Background)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
  ],
})