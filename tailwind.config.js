/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'primary-light': '#4285F4',
        'secondary-light': '#34A853',
        'accent-light': '#EA4335',
        'background-light': '#F9FAFB',
        'text-light': '#1A1A1B',

        // Dark mode colors
        'primary-dark': '#4C9AFF',
        'secondary-dark': '#4BD96F',
        'accent-dark': '#FF6B6B',
        'background-dark': '#1F2937',
        'text-dark': '#F5F7FA',
      },
    },
  },
  variants: {},
  plugins: [],
};