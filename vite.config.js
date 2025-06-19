import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kasa/', // Remplacez <nom-du-depot> par le nom de votre dépôt GitHub
});
