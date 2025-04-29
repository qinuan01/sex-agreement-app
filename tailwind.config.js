/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        softpink: {
          primary: "#f9a8d4",          // 柔粉主色（pink-300）
          "primary-focus": "#f472b6",  // 聚焦时（pink-400）
          "primary-content": "#ffffff",

          secondary: "#fbcfe8",        // 辅助色（pink-100）
          "secondary-focus": "#f9a8d4",
          "secondary-content": "#4b5563",

          accent: "#fcd34d",           // 柔黄（yellow-300）
          neutral: "#f3f4f6",          // 浅灰（gray-100）
          "neutral-content": "#4b5563",

          "base-100": "#ffffff",
          "base-200": "#fdf2f8",       // 背景淡粉
          "base-content": "#4b5563",

          info: "#a5b4fc",             // 蓝紫色（indigo-300）
          success: "#86efac",          // 柔绿（green-300）
          warning: "#fde68a",          // 柔黄（yellow-200）
          error: "#fca5a5",            // 柔红（red-300）
        },
      },
    ],
  },
};
