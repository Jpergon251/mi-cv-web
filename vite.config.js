import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isGitHubPages = process.env.DEPLOY_ENV === 'GH_PAGES'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
