/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "c8", // デフォルト。istanbulも指定可(要インストール)
      include: ["src/**/*.{js,ts,vue}"], // src配下のみを対象
      exclude: ["src/**/__mocks__/**"], // ディレクトリ除外
      all: true, // 未テストのコードもカバレッジに含める
      reporter: ["html", "clover", "text"] // HTML,Clover,テキスト形式のカバレッジレポート
    }
  }
})
