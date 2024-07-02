/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark"]
  },
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'system-ui'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
