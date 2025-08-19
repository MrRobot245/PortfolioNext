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
      name: "resume",
      title: "Resume",
      type: "file",
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

    defineField({
      name: "resumeList",
      title: "Resume Work",
      type: "array",
      of: [
        {
          type: "object", // Defines an inline object type
          fields: [
            {
              name: "currentFlag",
              title: "Current Job?",
              type: "boolean",
            },
            {
              name: "yearstart",
              title: "Year Started",
              type: "string",
              hidden: ({ document }) => !!document?.currentFlag,
            },
            {
              name: "year",
              title: "Years Worked",
              description: "(xxxx-xxxx or Present)",
              type: "string",
              hidden: ({ document }) => !document?.currentFlag,
            },
            {
              name: "jobtitle",
              title: "Job Title",
              type: "string",
            },
            {
              name: "businessname",
              title: "Business Name",
              type: "string",
            },
            {
              name: "body",
              title: "Job Description",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
          preview: {
            select: {
              title: "jobtitle", // Show the URL as the title
              subtitle: "businessname", // Optional: also show the icon name
            },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "educationList",
      title: "Education List",
      type: "array",
      of: [
        {
          type: "object", // Defines an inline object type
          fields: [
            {
              name: "year",
              title: "Years Worked",
              description: "(xxxx-xxxx or Present)",
              type: "string",
            },
            {
              name: "school",
              title: "School Title",
              type: "string",
            },
            {
              name: "program",
              title: "Program Name",
              type: "string",
            },
            {
              name: "body",
              title: "School Description",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
          preview: {
            select: {
              title: "school", // Show the URL as the title
              subtitle: "program", // Optional: also show the icon name
            },
          },
        },
      ],
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
