import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import config from "./src/config/site.config.json";

// https://astro.build/config
export default defineConfig({
  site: config.baseUrl ? config.baseUrl : "http://examplesite.com",
  base: config.basePath ? config.basePath : "/",
  trailingSlash: config.trailingSlash ? "always" : "ignore",
  markdown: {
    remarkPlugins: [],
    extendDefaultPlugins: true,
  },
  integrations: [
    astroExpressiveCode({
      themes: "andromeeda",
      shiki: {
        wrap: false,
      },
    }),
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@components/helpers/AstroImage.astro",
        "@components/shortcodes/Callout.astro",
        {
          "astro-embed": ["LinkPreview", "YouTube", "Vimeo"],
        },
      ],
    }),
    mdx(),
  ],
});
