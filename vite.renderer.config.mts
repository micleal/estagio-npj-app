import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';



// https://vitejs.dev/config
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve:{
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/app'),	
    }
  }
});
