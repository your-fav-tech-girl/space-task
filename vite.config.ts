import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
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
