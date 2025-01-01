// .prettierrc.mjs
// annoyingly have to use prettier right now as biome doesn't fully support HTML and CSS formatting
// follow https://biomejs.dev/internals/language-support/#html-super-languages-support
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
