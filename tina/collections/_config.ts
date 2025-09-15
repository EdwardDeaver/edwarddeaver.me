import type { Collection } from "tinacms";
import { image_ui } from "../fields/_image_ui";

export const config: Collection = {
  format: 'json',
  label: 'Site Config',
  name: 'config',
  path: 'src/config/',
  match: {
    include: 'site.config',
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
      label: 'Base URL',
      name: 'baseURL',
    },
    {
      type: 'string',
      label: 'Favicon',
      description: 'Should be placed in `public` folder',
      name: 'favicon',
    },
    {
      type: 'string',
      label: 'Base Path',
      name: 'basePath',
    },
    {
      type: 'boolean',
      label: 'Trailing Slash',
      description: 'Adds a trailing slash to all links',
      name: 'trailingSlash',
    },
    {
      label: 'Logo',
      name: 'logo',
      type: 'object',
      fields: [
        {
          label: 'Logo Light Mode',
          name: 'src',
          type: "image",
          ui: image_ui
        },
        {
          label: 'Logo Dark Mode',
          name: 'src_light',
          type: "image",
          ui: image_ui
        },
        {
          label: 'Logo `alt` Text',
          name: 'alt',
          type: 'string'
        },
        {
          label: 'Logo Width',
          name: 'width',
          type: 'number',
        },
        {
          label: 'Logo Height',
          name: 'height',
          type: 'number',
        },
      ],
    },
    {
      label: 'Metadata',
      name: 'metadata',
      type: 'object',
      fields: [
        {
          label: 'Meta Title',
          name: 'title',
          type: 'string'
        },
        {
          label: 'Meta Description',
          name: 'description',
          type: 'string',
        },
        {
          label: 'Author',
          name: 'author',
          type: 'string',
        },
        {
          label: 'Meta Keywords',
          name: 'keywords',
          type: 'string',
        },
        {
          label: 'OG Image',
          name: 'image',
          type: 'string',
        },
      ],
    },
    {
      label: 'Settings',
      name: 'settings',
      type: 'object',
      fields: [
        {
          label: 'How many posts to display on the homepage',
          name: 'homepage_post_count',
          type: 'number'
        },
        {
          label: 'Pagination (How many posts per page)',
          name: 'pagination',
          type: 'number',
        },
        {
          label: 'Footer Copyright',
          name: 'copyright',
          type: 'string',
        },
      ],
    },
  ],
}