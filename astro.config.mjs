import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react(), sitemap(), metaTags(), partytown()],
  output: "server",
  site: "https://codegen.studio",
  adapter: netlify(),
});
