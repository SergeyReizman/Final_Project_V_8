// Vite configuration for a React project

// Import necessary functions and plugins from Vite and @vitejs/plugin-react
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define and export the Vite configuration
export default defineConfig({
  // Use the 'react' plugin to enable React support in Vite
  plugins: [react()],

  // Additional configuration options can be added as needed
  // For a more detailed configuration, refer to: https://vitejs.dev/config/
});
