import { dirname, relative } from 'node:path'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { isDev, port, r } from './scripts/utils'
import packageJson from './package.json'
import sveltePreprocess from 'svelte-preprocess'

export const sharedConfig: UserConfig = {
  root: r('src'),
  resolve: {
    alias: {
      '~/': `${r('src')}/`,
    },
  },
  define: {
    __DEV__: isDev,
    __NAME__: JSON.stringify(packageJson.name),
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    AutoImport({
      imports: [
        'svelte',
        'svelte/store',
        {
          'webextension-polyfill': [
            ['*', 'browser'],
          ],
        },
      ],
      dts: 'auto_import.d.ts',
    }),
    
    UnoCSS(),

    {
      name: 'assets-rewrite',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html, { path }) {
        return html.replace(/"\/assets\//g, `"${relative(dirname(path), '/assets')}/`)
      },
    },
  ],
  optimizeDeps: {
    include: [
      'svelte',
      'webextension-polyfill',
    ],
  },
}

export default defineConfig(({ command }) => (console.log("ddd::",command),{
  ...sharedConfig,
  base: command === 'serve' ? `http://localhost:${port}/` : '/dist/',
  server: {
    port,
    hmr: {
      host: 'localhost',
    },
  },
  build: {
    minify: 'terser',
    watch: isDev
      ? {}
      : undefined,
    outDir: r('extension/dist'),
    emptyOutDir: false,
    sourcemap: isDev ? 'inline' : false,
    terserOptions: {
      mangle: false,
    },
    rollupOptions: {
      input: {
        options: r('src/options/index.html'),
        popup: r('src/popup/index.html'),
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
}))
