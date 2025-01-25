import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://ryoma-abe.github.io',
  base: '/astro-portfolio',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
