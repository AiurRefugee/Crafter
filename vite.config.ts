import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173, // 设置本地开发服务器的端口
    host: ['127.0.0.1', '192.168.2.52'], // 设置服务器的主机地址
    strictPort: true // 启用严格模式，确保端口可用
  }
});
