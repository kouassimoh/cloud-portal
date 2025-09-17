import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Frontend dev server port
    proxy: {
      // Proxy API calls to Flask backend running on 5000
      "/api": "http://127.0.0.1:5000"
    }
  }
});
