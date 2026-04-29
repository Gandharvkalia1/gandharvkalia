import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './sanity/schemaTypes';

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bfyw1t6g',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
