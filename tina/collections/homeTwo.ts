import type { Collection } from "tinacms";
import { image_ui } from "../fields/_image_ui";
import { seo } from "../fields/_seo";

export const homeTwo: Collection = {
  format: 'mdx',
  label: 'Home 02',
  name: 'home2',
  path: 'src/content/pages/',
  match: {
    include: '-index-2',
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
      type: 'image',
      label: 'Image',
      name: 'image',
      ui: { ...image_ui }
    },
    {
      type: 'string',
      label: 'Banner Subtitle',
      name: 'subtitle',
    },
    {
      type: 'string',
      label: 'Banner Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Banner Description',
      name: 'description',
    },
    {
      type: 'string',
      label: 'Banner Button Label',
      name: 'banner_button_label',
    },
    {
      type: 'object',
      label: 'Social Links',
      name: 'social_links',
      fields: [
        {
          label: "Enable",
          name: "enable",
          type: "boolean"
        },
        {
          label: "Twitter",
          name: "twitter",
          type: "string"
        },
        {
          label: "Facebook",
          name: "facebook",
          type: "string"
        },
        {
          label: "Linkedin",
          name: "linkedin",
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