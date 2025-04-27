import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://worldcup2023.varshithkumar.com",
  integrations: [tailwind(), sitemap(), react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});