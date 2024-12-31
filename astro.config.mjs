// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import deno from "@deno/astro-adapter";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alexwells.dev",
  integrations: [mdx(), sitemap()],
  adapter: deno(),
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
});
