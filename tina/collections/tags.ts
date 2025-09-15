import type { Collection } from "tinacms";
import { seo } from "../fields/_seo";

export const tags: Collection = {
  format: 'mdx',
  label: 'Tags',
  name: 'tags',
  path: 'src/content/pages/',
  match: {
    include: 'tags',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  fields: [
    {
      type: 'boolean',
      label: 'Draft',
      name: 'draft',
      description: 'If checked, this page will not be published.',
    },
    {
      type: 'string',
      label: 'Page Title',
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
          label: "Visible Posts Count/Amount",
          name: "visible_posts_count",
          type: "number"
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