import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";
import astroExpressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { getDarkTheme } from "./integrations/expressive-code";
import angular from "@analogjs/astro-angular";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Must run before Expressive Code so it can transform ```mermaid fences
    // (and exclude them from syntax highlighting) before EC processes them.
    mermaid({ theme: "dark" }),
    astroExpressiveCode({
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      themes: [getDarkTheme()],
    }),
    mdx(),
    sitemap(),
    metaTags(),
    partytown(),
    angular(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  site: "https://codegen.studio",
  adapter: netlify(),
});
