/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  corePlugins: {
    container: false,
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f26855",
        "primary-dark": "#29bc88",
        "dark": "#152035",
        "dark-dark": "#232936",
        "gray": "#505050",
        "gray-dark": "#c8c9cb",
        "light": "#FAFAFA",
        "body": "#FFF6EF",
        "body-dark": "#131926",
      },
      fontFamily: {
        primary: ["var(--font-primary)", "serif"],
        secondary: ["var(--font-secondary)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-bootstrap-grid")({
      gridGutters: {
        0: 0,
        1: ".5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.75rem",
        6: "3.25rem",
      },
    }),
  ],
};
