import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Deploying to GitHub Pages under a repo path (e.g. user.github.io/my-portfolio)?
// Add:  base: "/my-portfolio/",
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
