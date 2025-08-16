import { defineField, defineType } from "sanity";

export default defineType({
  name: "main",
  title: "Main Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scrollingText",
      title: "Scrolling Text",
      type: "array",
      of: [
        {
          type: "object", // Defines an inline object type
          fields: [
            {
              name: "text",
              title: "Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object", // Defines an inline object type
          fields: [
            {
              name: "fa",
              title: "Font Awesome Icon Class",
              type: "string",
            },
            {
              name: "faIcon",
              title: "Font Awesome Icon name",
              type: "string",
            },
            {
              name: "url",
              title: "Url",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "url", // Show the URL as the title
              subtitle: "faIcon", // Optional: also show the icon name
            },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Hero Quote",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutObjective",
      title: "About Objective",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutWhoAmI",
      title: "About Who Am I",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutSkills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object", // Defines an inline object type
          fields: [
            {
              name: "text",
              title: "Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutPicture",
      title: "About Picture",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutInfo",
      title: "About Info",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "Hero",
      // media: 'featuredimage',
    },
  },
});
