import type { Collection } from "tinacms";
import { seo } from "../fields/_seo";

export const homeThree: Collection = {
  format: 'mdx',
  label: 'Home 03',
  name: 'home3',
  path: 'src/content/pages/',
  match: {
    include: '-index-3',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  fields: [
    ...seo,
    {
      type: 'object',
      label: 'Featured Posts',
      name: 'featured_posts',
      fields: [
        {
          label: "Enable",
          name: "enable",
          type: "boolean"
        },
        {
          label: "Featured Posts",
          name: "title",
          type: "string"
        },
      ]
    },
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