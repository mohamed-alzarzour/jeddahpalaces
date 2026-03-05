import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'معلومات التواصل',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'البريد الإلكتروني',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'رقم الهاتف',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'العنوان',
      type: 'localeText',
    }),
    defineField({
      name: 'businessHours',
      title: 'ساعات العمل',
      type: 'localeText',
    }),
    defineField({
      name: 'socialMedia',
      title: 'روابط التواصل الاجتماعي',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'المنصة',
              type: 'string',
              options: {
                list: [
                  {title: 'فيسبوك', value: 'facebook'},
                  {title: 'إنستغرام', value: 'instagram'},
                  {title: 'تويتر / X', value: 'twitter'},
                  {title: 'لينكدإن', value: 'linkedin'},
                  {title: 'واتساب', value: 'whatsapp'},
                ],
              },
            },
            {
              name: 'url',
              title: 'الرابط',
              type: 'url',
            },
          ],
        },
      ],
    }),
  ],
})