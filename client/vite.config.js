import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

export default defineConfig({
    root: './', // Adjust if needed
    plugins: [react()],
    build: {
        outDir: 'dist', // Output directory
    },
    server: {
        port: process.env.VITE_PORT || 3000, // Example of using .env variable
    },
    define: {
        'process.env': process.env, // Allows access to .env variables in code
    },
});
