import type { Collection } from "tinacms";
import { seo } from "../fields/_seo";

export const contact: Collection = {
  format: 'mdx',
  label: 'Contact',
  name: 'contact',
  path: 'src/content/pages/',
  match: {
    include: 'contact',
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
      label: 'Contact Form',
      name: 'contact_form',
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string"
        },
        {
          label: "Description",
          name: "description",
          type: "string"
        },
        {
          label: "Contact Info Title",
          name: "contact_info_title",
          type: "string"
        },
        {
          label: "Email Address",
          description: "Visible beside the contact form",
          name: "email_address",
          type: "string"
        },
        {
          label: "Phone Number",
          name: "phone_number",
          type: "string"
        },
        {
          label: "Contact Form Email",
          description: "The email address where the contact form message will be sent to.",
          name: "contact_email",
          type: "string"
        },
        {
          label: "Contact Form Button Text",
          name: "form_button_text",
          type: "string"
        },
      ]
    },
  ],
}