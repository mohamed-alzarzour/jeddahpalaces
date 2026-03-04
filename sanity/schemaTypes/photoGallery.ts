import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photoGallery',
  title: 'Photo Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Gallery Description',
      type: 'localeText',
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'localeString',
            },
            {
              name: 'categories',
              title: 'Categories (Optional)',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                list: [
                  {title: 'Interior', value: 'interior'},
                  {title: 'Exterior', value: 'exterior'},
                  {title: 'Natural Stone', value: 'natural-stone'},
                  {title: 'Marble', value: 'marble'},
                  {title: 'Granite', value: 'granite'},
                  {title: 'GRC', value: 'grc'},
                  {title: 'Other', value: 'other'},
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'caption.en',
              categories: 'categories',
              media: 'image',
            },
            prepare({title, categories, media}) {
              return {
                title: title || 'Untitled Photo',
                subtitle: Array.isArray(categories) ? categories.join(', ') : '',
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
  ],
})
