import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),       // portfolio (now the homepage)
        landing: resolve(__dirname, 'landing.html'),  // old landing page (kept for future use)
      },
    },
  },
})
