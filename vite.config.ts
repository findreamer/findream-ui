/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Unocss from './config/unocss';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const rollupOptions = {
  external: ['vue', 'vue-router'], // 将vue、vue-router排除在boundle之外
  output: {
    globals: {
      vue: 'Vue', // umd/iffe包中的全局名称
    },
  },
};

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [vue(), vueJsx(), Unocss()],
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true, // 单独输出 source 文件
    cssCodeSplit: true,
    reportCompressedSize: true,
    lib: {
      entry: './src/entry.ts',
      name: 'FindreamUI',
      fileName: 'findream-ui',
      formats: ['es', 'umd', 'iife'], // 导出模块类型
    },
  },
});
