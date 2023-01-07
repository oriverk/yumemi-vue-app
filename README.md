# yumemi-vue-app

ゆめみ社フロントエンドコーディング試験

## 概要

- 参照
  - [フロントエンドコーディング試験](https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d)
  - [ワイヤーフレーム](https://notion.yumemi.co.jp/ab4a837f8e764dffb0fc93c7b1387af7)
  - [RESAS-API - 地域経済分析システム（RESAS）のAPI提供情報](https://opendata.resas-portal.go.jp/)

> [RESASとは？](https://opendata.resas-portal.go.jp/#:~:text=%E3%81%8A%E9%80%81%E3%82%8A%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82-,RESAS%E3%81%A8%E3%81%AF%EF%BC%9F,-%E5%9C%B0%E5%9F%9F%E7%B5%8C%E6%B8%88%E5%88%86%E6%9E%90)
>> 地域経済分析システム（以下、RESAS）は、地域に関する官民の様々なデータを搭載し、誰もが分かりやすいように「見える化」したシステムです。このシステムは、自治体職員の方や、地域の活性化に関心を持つ様々な野の方によって、効果的な施策の立案・実行・検証のためなどに広く利用されています。

## packages

- [Vite | Next Generation Frontend Tooling](https://vitejs.dev/)
- JavaScript
  - [Vue.js - The Progressive JavaScript Framework | Vue.js](https://vuejs.org/index.html)
  - [TypeScript: JavaScript With Syntax For Types.](https://www.typescriptlang.org/)
- test
  - [Vitest | A blazing fast unit test framework powered by Vite](https://vitest.dev/)
  - [Home | Vue Test Utils](https://test-utils.vuejs.org/)

## what i did

```sh
npm create vite@latest yumemi-vue-app -- --template vue-ts
npm i
```

```sh
npm i -D vitest jsdom @vue/test-utils @vitest/ui @vitest/coverage-c8
mkdir src/__test__
# modify vite.config.ts and tsconfig.json
```

## references

- テスト類
  - [A guide to Vitest automated testing with Vue components - LogRocket Blog](https://blog.logrocket.com/guide-vitest-automated-testing-vue-components/#creating-vue-component)
  - [Viteベースの高速テスティングフレームワークVitestを使ってみる | 豆蔵デベロッパーサイト](https://developer.mamezou-tech.com/blogs/2022/12/28/vitest-intro/)
