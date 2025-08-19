import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "HomepageSEO",
      title: "Homepage SEO",
      description: "SEO Meta Fields for Home Page.",
      type: "object",
      fields: [
        {
          name: "metaTags",
          title: "Meta Tags",
          type: "text",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        },
      ],
    },
    {
      name: "PhotographySEO",
      title: "Photography SEO",
      description: "SEO Meta Fields for Photography Page.",
      type: "object",
      fields: [
        {
          name: "metaTags",
          title: "Meta Tags",
          type: "text",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      // media: 'featuredimage',
    },
  },
});
