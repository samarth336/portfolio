import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Ensure the app binds to all interfaces
  server: {
    host: '0.0.0.0',  // Bind to 0.0.0.0 for Render's requirements
    port:  3000,  // Use the Render provided PORT environment variable
  },

  // Add this to include .docx files as assets
  assetsInclude: ['**/*.docx'],
});
