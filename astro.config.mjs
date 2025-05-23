import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  i18n: {
    defaultLocale: 'es',  // Idioma predeterminado
    locales: ['es', 'en', 'it'],  // Idiomas soportados
    trailingSlash: 'always',
  },
});