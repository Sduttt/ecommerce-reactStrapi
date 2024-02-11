/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00a1a6",

          "secondary": "#00ab00",

          "accent": "#00c3ff",

          "neutral": "#181d27",

          "base-100": "#deffff",

          "info": "#00e5ff",

          "success": "#3ede87",

          "warning": "#dd5e00",

          "error": "#ff5f7e",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

