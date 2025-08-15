'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {colorInput} from '@sanity/color-input'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schemaTypes'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set([""])
export default defineConfig({
  basePath: '/studio',
  name: 'nathanreymer',
  title: 'nathanreymerportfolio-cms',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
             S.listItem()
              .title("Main page")
              .id("main")
              .child(
                S.document()
                  .schemaType("main")
                  .documentId("main")
              ),
              S.listItem()
              .title("SEO")
              .id("seo")
              .child(
                S.document()
                  .schemaType("seo")
                  .documentId("seo")
              ),

            // Regular document types),
            // S.documentTypeListItem("brands").title("Brands"),
          ]),
    }),
    // structureTool(),
    colorInput(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  
})
