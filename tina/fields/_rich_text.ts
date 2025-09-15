import type { TinaField } from 'tinacms';
import { image_ui } from "./_image_ui";

export const rich_text: TinaField[] = [
  {
    isBody: true,
    label: "Body",
    name: "body",
    type: "rich-text",
    toolbarOverride: [
      "heading",
      "link",
      "bold",
      "italic", 
      "ol", 
      "ul", 
      "quote", 
      "code", 
      "codeBlock", 
      "raw",
      "embed",
    ],
    templates: [
      {
        name: "AstroImage",
        label: "Image",
        fields: [
          {
            name: "src",
            label: "Image src",
            type: "image",
            required: true,
            ui: image_ui
          },
          {
            name: "alt",
            label: "Image alt text",
            type: "string",
            required: true
          },
          {
            name: "width",
            label: "Image Width",
            type: "number",
            required: true
          },
          {
            name: "height",
            label: "Image Height",
            type: "number",
            required: true
          },
          {
            name: "caption",
            label: "Caption",
            type: "string"
          },
          {
            name: "class",
            label: "CSS Class name",
            type: "string"
          },
        ]
      },
      {
        name: "Callout",
        label: "Callout",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string"
          },
          {
            name: "theme",
            label: "Theme",
            type: "string",
            options: ["default", "info", "warning", "success", "error"]
          },
          {
            name: "icon",
            label: "Icon",
            type: "string",
            description: "Copy icon text from https://coolsymbol.com/"
          },
        ]
      },
      {
        name: "LinkPreview",
        label: "LinkPreview",
        fields: [
          {
            name: "id",
            label: "Link/URL",
            description: "example: https://astro.build/blog/welcome-world/",
            type: "string"
          },
        ]
      },
      {
        name: "YouTube",
        label: "YouTube",
        fields: [
          {
            name: "id",
            label: "YouTube Video ID",
            description: "example: QH2-TGUlwu4",
            type: "string"
          },
        ]
      },
      {
        name: "Vimeo",
        label: "Vimeo",
        fields: [
          {
            name: "id",
            label: "Vimeo Video ID",
            description: "example: 341490793",
            type: "string"
          },
        ]
      },
    ]
  }
]