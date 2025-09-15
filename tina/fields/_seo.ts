import type { TinaField } from 'tinacms';

export const seo: TinaField[] = [
  {
    label: "Metadata",
    name: "metadata",
    type: "object",
    fields: [
      {
        type: 'string',
        label: 'Meta Title',
        name: 'title',
        description: "If any of the `Metadata` fields are Empty, they will come from the `metadata` of `src/config/site.config.json` file.",
      },
      {
        type: 'string',
        label: 'Meta Description',
        name: 'description',
      },
      {
        type: 'string',
        label: 'Author',
        name: 'author',
      },
      {
        type: 'string',
        label: 'OG Image',
        name: 'image',
      },
      {
        type: 'string',
        label: 'Meta Keywords',
        name: 'keywords',
        description: 'Comma separated list of keywords. ex: keyword1, keyword2, keyword3',
      },
      {
        type: 'boolean',
        label: 'noindex',
        name: 'noindex',
        description: 'If checked, this page will not be indexed.',
      },
      {
        type: 'string',
        label: 'Canonical',
        name: 'canonical',
        description: 'The canonical URL for this page.',
      },
    ]
  }
]