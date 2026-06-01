import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mission: resolve(__dirname, 'mission.html'),
        programmes: resolve(__dirname, 'programmes.html'),
        impact: resolve(__dirname, 'impact.html'),
        participer: resolve(__dirname, 'participer.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
