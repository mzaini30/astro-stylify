import { defineConfig } from 'astro/config';
import stylify from '@stylify/astro';

export default defineConfig({
    integrations: [stylify()]
});
