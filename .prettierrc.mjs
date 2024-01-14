/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
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
