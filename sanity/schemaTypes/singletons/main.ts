import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'main',
  title: 'Main Page',
  type: 'document',
  fields: [

        defineField({
      name: 'mainHeroLogo',
      title: 'Landing Page Hero Background',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainHeroText',
      title: 'Landing Page Text Image',
      type: 'image',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainHeroTitle',
      title: 'Landing Page Hero Title',
     type: 'array',
      of: [{ type: 'block' }],
      // validation: (Rule) => Rule.required(),
    }),

  ],

  preview: {
    select: {
      title: "Hero",
      // media: 'featuredimage',
    },
  },
})
