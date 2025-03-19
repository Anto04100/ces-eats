import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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