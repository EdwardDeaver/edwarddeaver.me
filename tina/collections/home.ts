import type { Collection } from "tinacms"
import { seo } from "../fields/_seo"

export const home: Collection = {
  format: 'mdx',
  label: 'Home 01',
  name: 'home',
  path: 'src/content/pages/',
  match: {
    include: '-index',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  fields: [
    {
      type: 'string',
      label: 'Banner Title',
      name: 'title',
    },
    ...seo,
    {
      type: 'object',
      label: 'Recent Posts',
      name: 'recent_posts',
      fields: [
        {
          label: "Enable",
          name: "enable",
          type: "boolean"
        },
        {
          label: "Title",
          name: "title",
          type: "string"
        },
        {
          label: "Button Label",
          name: "button_label",
          type: "string",
        }
      ]
    },
  ],
}