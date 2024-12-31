// @ts-chec
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import deno from "@deno/astro-adapter";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alexwells.dev",
  integrations: [mdx(), sitemap()],
  adapter: deno(),
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            if (/\.(woff2|ttf)$/.test(name)) {
              return "fonts/[name][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },
  },
  server: {
    headers: {
      "*.woff2": {
        "Cache-Control": "public, max-age=31536000",
      },
      "*.ttf": {
        "Cache-Control": "public, max-age=31536000",
      },
    },
  },
});
