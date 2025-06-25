import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Kasa/", //  nom du dépôt GitHub pour le déploiement vers les github pages
});
