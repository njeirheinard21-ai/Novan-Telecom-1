import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      target: ['es2020', 'safari15.4', 'chrome87', 'firefox78', 'edge88'],
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            firebase_core: ['firebase/app', 'firebase/auth'],
            firebase_db: ['firebase/firestore'],
            react_vendor: ['react', 'react-dom', 'react-router', 'react-helmet-async'],
            ui_icons: ['lucide-react'],
            data_viz: ['recharts'],
            utils: ['zod', 'react-hook-form', 'zustand', '@tanstack/react-query', 'i18next', 'react-i18next']
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
