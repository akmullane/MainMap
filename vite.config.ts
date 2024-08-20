import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
    },
    server: {
        host: '0.0.0.0',
        port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    },
    preview: {
        host: '0.0.0.0',
        port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    },
});
