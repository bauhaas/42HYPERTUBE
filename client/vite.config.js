import { join } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // This is the port which we will use in docker
  },
  resolve: {
    alias: {
      '@internals/components': join(__dirname, 'src/components'),
      '@internals/layouts': join(__dirname, 'src/layouts'),
      '@internals/pages': join(__dirname, 'src/pages'),
    },
  },
});
