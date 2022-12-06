import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import "npm:react@^18.2";
import "npm:react-dom/client@^18.2";
import "npm:react-router-dom@^6.4"; // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
