/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: [
          'Orbitron',
          'Montserrat',
          'Inter',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
