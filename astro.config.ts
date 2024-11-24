import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";
import astroExpressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { getDarkTheme } from "./integrations/expressive-code";
import angular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroExpressiveCode({
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      themes: [getDarkTheme()],
    }),
    mdx(),
    tailwind(),
    sitemap(),
    metaTags(),
    partytown(),
    angular(),
  ],
  output: "server",
  site: "https://codegen.studio",
  adapter: netlify(),
});
