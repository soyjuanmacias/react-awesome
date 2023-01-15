import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '^/assets': {
          target: 'http://localhost:3000/',
        },
      },
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
  });
