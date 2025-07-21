import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['@testing-library/jest-dom'],
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
