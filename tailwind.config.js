/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        artisttheme: {
          primary: "#ff0077",
          secondary: "#4e00ff",
          accent: "#00ffcc",
          neutral: "#1c1c1c",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
