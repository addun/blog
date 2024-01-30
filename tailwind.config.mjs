/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: "auto",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
