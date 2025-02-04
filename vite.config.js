import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import ViteYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), ViteYaml()],
    build: {
      assetsInlineLimit: 0,
    },
    base: "",
  };
});
