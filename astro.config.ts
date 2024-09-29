import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";
import astroExpressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { getDarkTheme } from "./integrations/expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroExpressiveCode({
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      themes: [getDarkTheme()],
    }),
    mdx(),
    tailwind(),
    react(),
    sitemap(),
    metaTags(),
    partytown(),
  ],
  output: "server",
  site: "https://codegen.studio",
  adapter: netlify(),
});
