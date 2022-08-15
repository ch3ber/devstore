import { defineConfig } from 'vite'
const path = require('path')

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@router': path.resolve(__dirname, './src/router'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@login': path.resolve(__dirname, './src/login'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@models': path.resolve(__dirname, './src/models'),
      '@cart': path.resolve(__dirname, './src/cart.ts'),
      '@config': path.resolve(__dirname, './src/config.ts')
    }
  }
})
