import type { TinaField } from 'tinacms';
import { image_ui } from "./_image_ui";
import { rich_text } from "./_rich_text";

export const author: TinaField[] = [
  {
    required: true,
    isTitle: true,
    label: "Title",
    name: "title",
    type: "string",
  },
  {
    required: true,
    label: "Subtitle",
    name: "subtitle",
    type: "string",
  },
  {
    required: true,
    label: "Image",
    name: "image",
    type: "image",
    description: "Image of the author.",
    ui: { ...image_ui },
  },
  ...rich_text,
]