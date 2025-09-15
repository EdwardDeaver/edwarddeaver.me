import { defineConfig } from "tinacms";
import { config } from "./collections/_config";
import { menus } from "./collections/_menus";
import { subscription } from "./collections/_subscription";
import { about } from "./collections/about";
import { archive } from "./collections/archive";
import { author_page } from "./collections/author_page";
import { categories } from "./collections/categories";
import { contact } from "./collections/contact";
import { home } from "./collections/home";
import { homeThree } from "./collections/homeThree";
import { homeTwo } from "./collections/homeTwo";
import { privacy } from "./collections/privacy";
import { tags } from "./collections/tags";
import { author } from "./fields/author";
import { blog } from "./fields/blog";
import { portfolio } from "./fields/portfolio";

const listCollectionUI = {
  allowedActions: {
    create: true,
    delete: true,
    createNestedFolder: false,
  }
}

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: "b0c01ed9-32ba-4b7e-a817-3a5231fe7627",
  token: "5a3ed57f81c1c7709ea71faee7eeeb15536fca65",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      publicFolder: "",
      mediaRoot: "src/assets",
    },
  },

  search: {
    tina: {
      indexerToken: '955a3f1da8c37d30400cf52f16a25487a8d42c4b',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
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
				fields: author,
			},
			{
				format: "mdx",
				label: "Blog Posts",
				name: "blog",
				path: "src/content/blog",
				ui: listCollectionUI,
				fields: blog,
			},
    			{
				format: "mdx",
				label: "Portfolio Posts",
				name: "portfolio",
				path: "src/content/portfolio",
				ui: listCollectionUI,
				fields: portfolio,
			},
      categories,
      tags,
      archive,
      contact,
      privacy,
		],
  },
});
