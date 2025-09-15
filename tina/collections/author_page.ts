import type { Collection } from "tinacms";
import { seo } from "../fields/_seo";

export const author_page: Collection = {
  format: 'mdx',
  label: 'Author',
  name: 'author_page',
  path: 'src/content/pages/',
  match: {
    include: 'author',
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
  ],
}