import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',  // Idioma predeterminado
    locales: ['es', 'en', 'it'],  // Idiomas soportados
    trailingSlash: 'always',
  },
});