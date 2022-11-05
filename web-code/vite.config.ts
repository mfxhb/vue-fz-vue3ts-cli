/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 13:59:55
 * @LastEditTime: 2022-08-24 15:57:09
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envDir: path.resolve(__dirname, "./dev_conf/"),
  envPrefix: "Env_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:8899",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
