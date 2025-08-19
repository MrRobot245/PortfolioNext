import { defineField, defineType } from "sanity";

export default defineType({
  name: "photos",
  title: "Photography Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photoCollection",
      title: "Photo Collection",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Optional: enables hotspot for responsive cropping
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      // media: 'featuredimage',
    },
  },
});
