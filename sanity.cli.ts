// sanity/sanity.cli.ts
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 't2htf078',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  // Remove the 'studio' property - it doesn't exist in CliConfig
  vite: {
    server: {
      port: 3333,
      strictPort: true,
    },
    optimizeDeps: {
      force: true,
    },
  },
});