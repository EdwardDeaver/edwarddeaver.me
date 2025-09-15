import { type TinaField } from 'tinacms';
import { authors } from "../options/authors.json";
import { image_ui } from "./_image_ui";
import { rich_text } from "./_rich_text";

export const blog: TinaField[] = [
  {
    label: "Draft",
    name: "draft",
    description: "If checked, this post will not be published.",
    type: "boolean",
  },
  {
    label: "Featured Post",
    name: "featured",
    description: "If checked, this post will be featured.",
    type: "boolean",
  },
  {
    required: true,
    label: "Date",
    name: "date",
    type: "datetime",
  },
  {
    required: true,
    label: "Title",
    name: "title",
    type: "string",
  },
  {
    required: true,
    label: "Description",
    name: "description",
    type: "string",
    ui: {
      component: "textarea",
    },
  },
  {
  	label: "Author",
  	name: "author",
  	type: "string",
    options: authors,
    ui: {
      component: "select",
    },
  },
  {
    required: true,
  	label: "Categories",
  	name: "categories",
  	type: "string",
    list: true,
    ui: {
      component: "tags",
    },
  },
  {
  	required: true,
  	label: "Tags",
  	name: "tags",
  	type: "string",
    list: true,
    ui: {
      component: "tags",
    },
  },
  {
    required: true,
    label: "Image",
    name: "image",
    type: "image",
    description: "Image for your post.",
    ui: { ...image_ui },
  },
  ...rich_text,
]