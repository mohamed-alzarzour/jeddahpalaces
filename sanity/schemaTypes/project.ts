import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          {title: '🏗️ Active (Under Construction)', value: 'active'},
          {title: '✅ Completed', value: 'completed'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'localeString',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional. If not set, the After Image will be used as the main image.',
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image (Main Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The primary display image. Required for project completion.',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context?.parent as {status?: string} | undefined
          if (parent?.status === 'completed' && !value) {
            return 'After Image is required to mark the project as completed'
          }
          return true
        }),
    }),
    defineField({
      name: 'progressPhotos',
      title: 'Progress Photos',
      type: 'array',
      description: 'Construction progress photos — add photos as the project progresses.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'localeString',
            },
            {
              name: 'date',
              title: 'Date Taken',
              type: 'date',
            },
          ],
          preview: {
            select: {
              title: 'caption.en',
              subtitle: 'date',
              media: 'image',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Progress Photo',
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
      title: 'Materials Used',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Interior', value: 'interior'},
          {title: 'Exterior', value: 'exterior'},
          {title: 'Both', value: 'both'},
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      status: 'status',
      media: 'afterImage',
    },
    prepare({title, status, media}) {
      const emoji = status === 'completed' ? '✅' : '🏗️'
      return {
        title: `${emoji} ${title || 'Untitled'}`,
        media,
      }
    },
  },
})