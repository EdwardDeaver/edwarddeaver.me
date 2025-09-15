import type { Collection } from "tinacms";
import { rich_text } from "../fields/_rich_text";
import { seo } from "../fields/_seo";

export const privacy: Collection = {
  format: 'mdx',
  label: 'Privacy',
  name: 'privacy',
  path: 'src/content/pages/',
  match: {
    include: 'privacy',
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
    ...rich_text,
  ],
}