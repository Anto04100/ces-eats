import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    proxy: {
      '/tasks': {
        target: 'http://localhost:3000',  // 🔗 Proxy vers le backend
        changeOrigin: true,
        secure: false
      }
    }
  }
});