// tina/config.ts
import { defineConfig } from "tinacms";

// tina/fields/_image_ui.ts
var image_ui = {
  format: (val) => {
    let url;
    if (val?.startsWith("http")) {
      url = val.replace("/assets/", "/");
    } else if (val?.startsWith("/src//src/")) {
      url = val?.replace("/src//src/", "/src/");
    } else {
      url = val?.replace(val, `/src/${val}`);
    }
    return url;
  },
  parse: (val) => {
    let url;
    if (val?.startsWith("http")) {
      url = val.replace("/assets/", "/");
    } else if (val?.startsWith("/src//src/")) {
      url = val?.replace("/src//src/", "");
    } else {
      url = val?.replace("/src/", "");
    }
    return url;
  }
};

// tina/collections/_config.ts
var config = {
  format: "json",
  label: "Site Config",
  name: "config",
  path: "src/config/",
  match: {
    include: "site.config"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "string",
      label: "Base URL",
      name: "baseURL"
    },
    {
      type: "string",
      label: "Favicon",
      description: "Should be placed in `public` folder",
      name: "favicon"
    },
    {
      type: "string",
      label: "Base Path",
      name: "basePath"
    },
    {
      type: "boolean",
      label: "Trailing Slash",
      description: "Adds a trailing slash to all links",
      name: "trailingSlash"
    },
    {
      label: "Logo",
      name: "logo",
      type: "object",
      fields: [
        {
          label: "Logo Light Mode",
          name: "src",
          type: "image",
          ui: image_ui
        },
        {
          label: "Logo Dark Mode",
          name: "src_light",
          type: "image",
          ui: image_ui
        },
        {
          label: "Logo `alt` Text",
          name: "alt",
          type: "string"
        },
        {
          label: "Logo Width",
          name: "width",
          type: "number"
        },
        {
          label: "Logo Height",
          name: "height",
          type: "number"
        }
      ]
    },
    {
      label: "Metadata",
      name: "metadata",
      type: "object",
      fields: [
        {
          label: "Meta Title",
          name: "title",
          type: "string"
        },
        {
          label: "Meta Description",
          name: "description",
          type: "string"
        },
        {
          label: "Author",
          name: "author",
          type: "string"
        },
        {
          label: "Meta Keywords",
          name: "keywords",
          type: "string"
        },
        {
          label: "OG Image",
          name: "image",
          type: "string"
        }
      ]
    },
    {
      label: "Settings",
      name: "settings",
      type: "object",
      fields: [
        {
          label: "How many posts to display on the homepage",
          name: "homepage_post_count",
          type: "number"
        },
        {
          label: "Pagination (How many posts per page)",
          name: "pagination",
          type: "number"
        },
        {
          label: "Footer Copyright",
          name: "copyright",
          type: "string"
        }
      ]
    }
  ]
};

// tina/collections/_menus.ts
var menus = {
  format: "json",
  label: "Menus",
  name: "menus",
  path: "src/config/",
  match: {
    include: "menus"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "object",
      label: "Main Menu",
      name: "mainMenu",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Main Menu Item"
        })
      },
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
          required: true
        },
        {
          type: "string",
          label: "Link",
          name: "link",
          required: true
        },
        {
          type: "string",
          label: "Target",
          name: "target",
          options: ["", "_blank", "_self", "_parent", "_top"]
        },
        {
          type: "string",
          label: "Rel",
          name: "rel"
        },
        {
          type: "object",
          label: "Submenu",
          name: "submenu",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || "SubMenu Item"
            })
          },
          fields: [
            {
              type: "string",
              label: "Name",
              name: "name",
              isTitle: true,
              required: true
            },
            {
              type: "string",
              label: "Link",
              name: "link",
              required: true
            },
            {
              type: "string",
              label: "Target",
              name: "target",
              options: ["", "_blank", "_self", "_parent", "_top"]
            },
            {
              type: "string",
              label: "Rel",
              name: "rel"
            }
          ]
        }
      ]
    },
    {
      type: "object",
      label: "Footer Menu",
      name: "footerMenu",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Footer Menu Item"
        })
      },
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
          required: true
        },
        {
          type: "string",
          label: "Link",
          name: "link",
          required: true
        },
        {
          type: "string",
          label: "Target",
          name: "target",
          options: ["", "_blank", "_self", "_parent", "_top"]
        },
        {
          type: "string",
          label: "Rel",
          name: "rel"
        }
      ]
    }
  ]
};

// tina/collections/_subscription.ts
var subscription = {
  format: "json",
  label: "Subscription Config",
  name: "subscription",
  path: "src/config/",
  match: {
    include: "subscription"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "string",
      label: "MailChimp Form Action",
      name: "mailChimpFormAction"
    },
    {
      type: "string",
      label: "MailChimp Form Name",
      name: "mailChimpFormName"
    },
    {
      type: "string",
      label: "Subscription Input Placeholder",
      name: "formPlaceholder"
    },
    {
      type: "string",
      label: "Subscription Form Button Label",
      name: "formButtonLabel"
    }
  ]
};

// tina/fields/_seo.ts
var seo = [
  {
    label: "Metadata",
    name: "metadata",
    type: "object",
    fields: [
      {
        type: "string",
        label: "Meta Title",
        name: "title",
        description: "If any of the `Metadata` fields are Empty, they will come from the `metadata` of `src/config/site.config.json` file."
      },
      {
        type: "string",
        label: "Meta Description",
        name: "description"
      },
      {
        type: "string",
        label: "Author",
        name: "author"
      },
      {
        type: "string",
        label: "OG Image",
        name: "image"
      },
      {
        type: "string",
        label: "Meta Keywords",
        name: "keywords",
        description: "Comma separated list of keywords. ex: keyword1, keyword2, keyword3"
      },
      {
        type: "boolean",
        label: "noindex",
        name: "noindex",
        description: "If checked, this page will not be indexed."
      },
      {
        type: "string",
        label: "Canonical",
        name: "canonical",
        description: "The canonical URL for this page."
      }
    ]
  }
];

// tina/collections/about.ts
var about = {
  format: "mdx",
  label: "About",
  name: "about",
  path: "src/content/pages/",
  match: {
    include: "about"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description: "If checked, this page will not be published."
    },
    {
      type: "string",
      label: "Page Title",
      name: "title"
    },
    ...seo,
    {
      type: "object",
      label: "Intro",
      name: "intro",
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
            }
          ]
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          ui: {
            component: "textarea"
          }
        }
      ]
    },
    {
      type: "object",
      label: "Writers",
      name: "our_writers",
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
    }
  ]
};

// tina/collections/archive.ts
var archive = {
  format: "mdx",
  label: "Archive",
  name: "archive",
  path: "src/content/pages/",
  match: {
    include: "archive"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description: "If checked, this page will not be published."
    },
    {
      type: "string",
      label: "Page Title",
      name: "title"
    },
    ...seo
  ]
};

// tina/collections/author_page.ts
var author_page = {
  format: "mdx",
  label: "Author",
  name: "author_page",
  path: "src/content/pages/",
  match: {
    include: "author"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description: "If checked, this page will not be published."
    },
    {
      type: "string",
      label: "Page Title",
      name: "title"
    },
    ...seo
  ]
};

// tina/collections/categories.ts
var categories = {
  format: "mdx",
  label: "Categories",
  name: "categories",
  path: "src/content/pages/",
  match: {
    include: "categories"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description: "If checked, this page will not be published."
    },
    {
      type: "string",
      label: "Page Title",
      name: "title"
    },
    ...seo,
    {
      type: "object",
      label: "Recent Posts",
      name: "recent_posts",
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
          label: "Visible Posts Count/Amount",
          name: "visible_posts_count",
          type: "number"
        },
        {
          label: "Button Label",
          name: "button_label",
          type: "string"
        }
      ]
    }
  ]
};

// tina/collections/contact.ts
var contact = {
  format: "mdx",
  label: "Contact",
  name: "contact",
  path: "src/content/pages/",
  match: {
    include: "contact"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description: "If checked, this page will not be published."
    },
    {
      type: "string",
      label: "Page Title",
      name: "title"
    },
    ...seo,
    {
      type: "object",
      label: "Contact Form",
      name: "contact_form",
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
        }
      ]
    }
  ]
};

// tina/collections/home.ts
var home = {
  format: "mdx",
  label: "Home 01",
  name: "home",
  path: "src/content/pages/",
  match: {
    include: "-index"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "string",
      label: "Banner Title",
      name: "title"
    },
    ...seo,
    {
      type: "object",
      label: "Recent Posts",
      name: "recent_posts",
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
          type: "string"
        }
      ]
    }
  ]
};

// tina/collections/homeThree.ts
var homeThree = {
  format: "mdx",
  label: "Home 03",
  name: "home3",
  path: "src/content/pages/",
  match: {
    include: "-index-3"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    ...seo,
    {
      type: "object",
      label: "Featured Posts",
      name: "featured_posts",
      fields: [
        {
          label: "Enable",
          name: "enable",
          type: "boolean"
        },
        {
          label: "Featured Posts",
          name: "title",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      label: "Recent Posts",
      name: "recent_posts",
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
          type: "string"
        }
      ]
    }
  ]
};

// tina/collections/homeTwo.ts
var homeTwo = {
  format: "mdx",
  label: "Home 02",
  name: "home2",
  path: "src/content/pages/",
  match: {
    include: "-index-2"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    ...seo,
    {
      type: "image",
      label: "Image",
      name: "image",
      ui: { ...image_ui }
    },
    {
      type: "string",
      label: "Banner Subtitle",
      name: "subtitle"
    },
    {
      type: "string",
      label: "Banner Title",
      name: "title"
    },
    {
      type: "string",
      label: "Banner Description",
      name: "description"
    },
    {
      type: "string",
      label: "Banner Button Label",
      name: "banner_button_label"
    },
    {
      type: "object",
      label: "Social Links",
      name: "social_links",
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
        }
      ]
    },
    {
      type: "object",
      label: "Recent Posts",
      name: "recent_posts",
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
          type: "string"
        }
      ]
    }
  ]
};

// tina/fields/_rich_text.ts
var rich_text = [
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
      "embed"
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
          }
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
          }
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
          }
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
          }
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
          }
        ]
      }
    ]
  }
];

// tina/collections/privacy.ts
var privacy = {
  format: "mdx",
  label: "Privacy",
  name: "privacy",
  path: "src/content/pages/",
  match: {
    include: "privacy"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description: "If checked, this page will not be published."
    },
    {
      type: "string",
      label: "Page Title",
      name: "title"
    },
    ...seo,
    ...rich_text
  ]
};

// tina/collections/tags.ts
var tags = {
  format: "mdx",
  label: "Tags",
  name: "tags",
  path: "src/content/pages/",
  match: {
    include: "tags"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "boolean",
      label: "Draft",
      name: "draft",
      description: "If checked, this page will not be published."
    },
    {
      type: "string",
      label: "Page Title",
      name: "title"
    },
    ...seo,
    {
      type: "object",
      label: "Recent Posts",
      name: "recent_posts",
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
          label: "Visible Posts Count/Amount",
          name: "visible_posts_count",
          type: "number"
        },
        {
          label: "Button Label",
          name: "button_label",
          type: "string"
        }
      ]
    }
  ]
};

// tina/fields/author.ts
var author = [
  {
    required: true,
    isTitle: true,
    label: "Title",
    name: "title",
    type: "string"
  },
  {
    required: true,
    label: "Subtitle",
    name: "subtitle",
    type: "string"
  },
  {
    required: true,
    label: "Image",
    name: "image",
    type: "image",
    description: "Image of the author.",
    ui: { ...image_ui }
  },
  ...rich_text
];

// tina/fields/blog.ts
import "tinacms";

// tina/options/authors.json
var authors = ["Edward Deaver"];

// tina/fields/blog.ts
var blog = [
  {
    label: "Draft",
    name: "draft",
    description: "If checked, this post will not be published.",
    type: "boolean"
  },
  {
    label: "Featured Post",
    name: "featured",
    description: "If checked, this post will be featured.",
    type: "boolean"
  },
  {
    required: true,
    label: "Date",
    name: "date",
    type: "datetime"
  },
  {
    required: true,
    label: "Title",
    name: "title",
    type: "string"
  },
  {
    required: true,
    label: "Description",
    name: "description",
    type: "string",
    ui: {
      component: "textarea"
    }
  },
  {
    label: "Author",
    name: "author",
    type: "string",
    options: authors,
    ui: {
      component: "select"
    }
  },
  {
    required: true,
    label: "Categories",
    name: "categories",
    type: "string",
    list: true,
    ui: {
      component: "tags"
    }
  },
  {
    required: true,
    label: "Tags",
    name: "tags",
    type: "string",
    list: true,
    ui: {
      component: "tags"
    }
  },
  {
    required: true,
    label: "Image",
    name: "image",
    type: "image",
    description: "Image for your post.",
    ui: { ...image_ui }
  },
  ...rich_text
];

// tina/fields/portfolio.ts
import "tinacms";
var portfolio = [
  {
    label: "Draft",
    name: "draft",
    description: "If checked, this post will not be published.",
    type: "boolean"
  },
  {
    label: "Featured Post",
    name: "featured",
    description: "If checked, this post will be featured.",
    type: "boolean"
  },
  {
    required: true,
    label: "Date",
    name: "date",
    type: "datetime"
  },
  {
    required: true,
    label: "Title",
    name: "title",
    type: "string"
  },
  {
    required: true,
    label: "Description",
    name: "description",
    type: "string",
    ui: {
      component: "textarea"
    }
  },
  {
    label: "Author",
    name: "author",
    type: "string",
    options: authors,
    ui: {
      component: "select"
    }
  },
  {
    required: true,
    label: "Categories",
    name: "categories",
    type: "string",
    list: true,
    ui: {
      component: "tags"
    }
  },
  {
    required: true,
    label: "Tags",
    name: "tags",
    type: "string",
    list: true,
    ui: {
      component: "tags"
    }
  },
  {
    required: true,
    label: "Image",
    name: "image",
    type: "image",
    description: "Image for your post.",
    ui: { ...image_ui }
  },
  ...rich_text
];

// tina/config.ts
var listCollectionUI = {
  allowedActions: {
    create: true,
    delete: true,
    createNestedFolder: false
  }
};
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: "b0c01ed9-32ba-4b7e-a817-3a5231fe7627",
  token: "5a3ed57f81c1c7709ea71faee7eeeb15536fca65",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      publicFolder: "",
      mediaRoot: "src/assets"
    }
  },
  search: {
    tina: {
      indexerToken: "955a3f1da8c37d30400cf52f16a25487a8d42c4b",
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  cmsCallback: (cms) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../src/styles/_admin.css";
    document.head.appendChild(link);
    return cms;
  },
  // See docs on content modeling for more info: https://tina.io/docs/schema/
  schema: {
    collections: [
      menus,
      config,
      subscription,
      home,
      homeTwo,
      homeThree,
      about,
      author_page,
      {
        format: "mdx",
        label: "All Authors",
        name: "author",
        path: "src/content/author",
        ui: listCollectionUI,
        fields: author
      },
      {
        format: "mdx",
        label: "Blog Posts",
        name: "blog",
        path: "src/content/blog",
        ui: listCollectionUI,
        fields: blog
      },
      {
        format: "mdx",
        label: "Portfolio Posts",
        name: "portfolio",
        path: "src/content/portfolio",
        ui: listCollectionUI,
        fields: portfolio
      },
      categories,
      tags,
      archive,
      contact,
      privacy
    ]
  }
});
export {
  config_default as default
};
