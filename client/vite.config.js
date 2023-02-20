import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { join } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@internals/components': join(__dirname, 'src/components'),
      '@internals/layouts': join(__dirname, 'src/layouts'),
      '@internals/pages': join(__dirname, 'src/pages'),
    },
  },
});