import type { Collection } from "tinacms";
import { seo } from "../fields/_seo";

export const archive: Collection = {
  format: 'mdx',
  label: 'Archive',
  name: 'archive',
  path: 'src/content/pages/',
  match: {
    include: 'archive',
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
    ...seo
  ],
}