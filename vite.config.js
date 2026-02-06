import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import localResume from './vite-plugin-local-resume.js'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [localResume(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
