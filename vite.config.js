import { defineConfig } from 'vite'

const path = require('path')
const { createVuePlugin } = require('vite-plugin-vue2')
import { svgBuilder } from './src/plugins/svgBuilder'
import WindiCSS from 'vite-plugin-windicss'

import esbuildPlugin from 'esbuild-plugin-vite-element-ui'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          // 去掉 回车 引起的 margin
          whitespace: 'condense',
        },
      },
    }),
    svgBuilder('./src/icons/svg/'),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@/assets/fonts'],
    esbuildOptions: {
      plugins: [esbuildPlugin()],
    },
  },
  base: '/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
          // lodash: ["lodash"],
        },
      },
    },
  },
})
