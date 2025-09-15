import type { Collection } from "tinacms";

export const subscription: Collection = {
  format: 'json',
  label: 'Subscription Config',
  name: 'subscription',
  path: 'src/config/',
  match: {
    include: 'subscription',
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
      label: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'MailChimp Form Action',
      name: 'mailChimpFormAction',
    },
    {
      type: 'string',
      label: 'MailChimp Form Name',
      name: 'mailChimpFormName',
    },
    {
      type: 'string',
      label: 'Subscription Input Placeholder',
      name: 'formPlaceholder',
    },
    {
      type: 'string',
      label: 'Subscription Form Button Label',
      name: 'formButtonLabel',
    }
  ],
}