import type { Collection } from "tinacms";
import { image_ui } from "../fields/_image_ui";
import { seo } from "../fields/_seo";

export const about: Collection = {
  format: 'mdx',
  label: 'About',
  name: 'about',
  path: 'src/content/pages/',
  match: {
    include: 'about',
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
      label: 'Intro',
      name: 'intro',
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string"
        },
        {
          label: "Images",
          name: "images",
          type: "object",
          list: true,
          fields: [
            {
              label: "Image",
              name: "src",
              type: "image",
              ui: image_ui
            },
            {
              label: "Image Width",
              name: "width",
              type: "number"
            },
            {
              label: "Image Height",
              name: "height",
              type: "number"
            },
            {
              label: "Image Grid Class",
              name: "grid_class",
              type: "string"
            },
          ]
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
          ui: {
            component: 'textarea'
          }
        },
      ]
    },
    {
      type: 'object',
      label: 'Writers',
      name: 'our_writers',
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
        }
      ]
    },
  ],
}