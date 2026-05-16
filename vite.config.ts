import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [react(), tailwindcss(), imagetools()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || ''),
      'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN || env.GITHUB_TOKEN || ''),
      'process.env.GROQ_API_KEY': JSON.stringify(process.env.GROQ_API_KEY || env.GROQ_API_KEY || ''),
      'process.env.OPENROUTER_API_KEY': JSON.stringify(process.env.OPENROUTER_API_KEY || env.OPENROUTER_API_KEY || ''),
      'process.env.OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY || env.OPENAI_API_KEY || ''),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
