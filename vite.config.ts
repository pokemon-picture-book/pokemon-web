import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
            '~': path.resolve(__dirname, '/node_modules/')
        }
    },
    plugins: [vue(), svgLoader()]
});
