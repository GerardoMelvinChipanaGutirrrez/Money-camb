import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Money-camb/', // Asegúrate de que el nombre coincide con el repo
});