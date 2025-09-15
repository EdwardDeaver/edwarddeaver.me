import type { Collection } from "tinacms";

export const menus: Collection = {
  format: 'json',
  label: 'Menus',
  name: 'menus',
  path: 'src/config/',
  match: {
    include: 'menus',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  fields: [
    {
      type: 'object',
      label: 'Main Menu',
      name: 'mainMenu',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Main Menu Item",
        }),
      },
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name',
          required: true,
        },
        {
          type: 'string',
          label: 'Link',
          name: 'link',
          required: true,
        },
        {
          type: 'string',
          label: 'Target',
          name: 'target',
          options: ['', '_blank', '_self', '_parent', '_top'],
        },
        {
          type: 'string',
          label: 'Rel',
          name: 'rel',
        },
        {
          type: 'object',
          label: 'Submenu',
          name: 'submenu',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || "SubMenu Item",
            }),
          },
          fields: [
            {
              type: 'string',
              label: 'Name',
              name: 'name',
              isTitle: true,
              required: true,
            },
            {
              type: 'string',
              label: 'Link',
              name: 'link',
              required: true,
            },
            {
              type: 'string',
              label: 'Target',
              name: 'target',
              options: ['', '_blank', '_self', '_parent', '_top'],
            },
            {
              type: 'string',
              label: 'Rel',
              name: 'rel',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      label: 'Footer Menu',
      name: 'footerMenu',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Footer Menu Item",
        }),
      },
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name',
          required: true,
        },
        {
          type: 'string',
          label: 'Link',
          name: 'link',
          required: true,
        },
        {
          type: 'string',
          label: 'Target',
          name: 'target',
          options: ['', '_blank', '_self', '_parent', '_top'],
        },
        {
          type: 'string',
          label: 'Rel',
          name: 'rel',
        },
      ],
    }
  ],
}