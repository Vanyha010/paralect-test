import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'CTP_',
  build: {
    target: 'esnext'
  },
})
