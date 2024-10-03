/// <reference types="vitest" />
import { replaceFiles } from '@nx/vite/plugins/rollup-replace-files.plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../../dist/apps/todo/react',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  cacheDir: '../../../node_modules/.vite/todo-react',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    replaceFiles([
      {
        replace: 'apps/todo/react/src/environments/environment.ts',
        with: 'apps/todo/react/src/environments/environment.prod.ts',
      },
    ]),
    svgr(),
    react(),
    nxViteTsPaths(),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../../',
  //    }),
  //  ],
  // },
});
