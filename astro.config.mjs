import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";
import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({ syntaxHighlight: "prism" }),
    tailwind(),
    react(),
    sitemap(),
    metaTags(),
    partytown(),
    analogjsangular(),
  ],
  output: "server",
  site: "https://codegen.studio",
  adapter: netlify(),
});
