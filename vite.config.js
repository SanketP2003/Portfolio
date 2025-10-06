import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// PostCSS (tailwindcss + autoprefixer) is configured in postcss.config.js
export default defineConfig({
  plugins: [react()],
})
