import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://steinneves.github.io',
  base: '/fuzzy-train', // Repo name; remove this line if you rename the repo to steinneves.github.io
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), icon()], // Add renderers to the config
});