import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(), // ✅ Tailwind v4 plugin for Vite
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        crew: "crew.html",
        technology: "technology.html",
        destination: "destination.html",
      },
    },
  },
});
