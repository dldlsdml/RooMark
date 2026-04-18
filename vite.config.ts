import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSingleFile({
      useRecommendedBuildConfig: true,
      removeViteModuleLoader: true,
      inlinePattern: ['**/*'],
      deleteInlinedFiles: true,
    }),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'index.html',
      },
    },
    assetsInlineLimit: 100000000,
  },
})
